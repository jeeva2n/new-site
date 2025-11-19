const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();

// Create connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'daks_ndt',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create uploads directory
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Static files
app.use('/uploads', express.static(uploadsDir));

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});

// Get all products
app.get('/api/products', async (req, res) => {
  try {
    const { type } = req.query;
    let query = 'SELECT * FROM products';
    const params = [];

    if (type) {
      query += ' WHERE product_type = ?';
      params.push(type);
    }

    query += ' ORDER BY created_at DESC';

    const [rows] = await pool.execute(query, params);
    res.json({
      success: true,
      products: rows
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error fetching products',
      error: error.message 
    });
  }
});

// Get single product by ID - ADD THIS!
app.get('/api/products/:id', async (req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT * FROM products WHERE id = ?',
      [req.params.id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ 
        success: false,
        message: 'Product not found' 
      });
    }

    res.json({
      success: true,
      product: rows[0]
    });
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error fetching product',
      error: error.message 
    });
  }
});

// Create new product - Updated to support product_type
app.post('/api/products', upload.single('image'), async (req, res) => {
  console.log('Product upload request received');
  console.log('Body:', req.body);
  console.log('File:', req.file);

  try {
    const { name, description, category, subcategory, product_type } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ 
        success: false,
        message: 'Product image is required' 
      });
    }

    const imageUrl = '/uploads/' + req.file.filename;
    const productType = product_type || 'flawed_specimens';

    // Check if product_type column exists, if not use the query without it
    let query;
    let params;
    
    try {
      const [result] = await pool.execute(
        `INSERT INTO products (name, description, category, subcategory, product_type, image_url) 
         VALUES (?, ?, ?, ?, ?, ?)`,
        [name, description, category, subcategory, productType, imageUrl]
      );
      
      console.log('Product inserted with ID:', result.insertId);

      res.status(201).json({
        success: true,
        message: 'Product created successfully',
        productId: result.insertId
      });
    } catch (error) {
      // If product_type column doesn't exist, insert without it
      if (error.code === 'ER_BAD_FIELD_ERROR') {
        const [result] = await pool.execute(
          `INSERT INTO products (name, description, category, subcategory, image_url) 
           VALUES (?, ?, ?, ?, ?)`,
          [name, description, category, subcategory, imageUrl]
        );
        
        console.log('Product inserted with ID:', result.insertId);

        res.status(201).json({
          success: true,
          message: 'Product created successfully',
          productId: result.insertId
        });
      } else {
        throw error;
      }
    }
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error creating product',
      error: error.message 
    });
  }
});

// Delete product
app.delete('/api/products/:id', async (req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT * FROM products WHERE id = ?',
      [req.params.id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ 
        success: false,
        message: 'Product not found' 
      });
    }

    // Delete image file
    const imagePath = path.join(__dirname, rows[0].image_url);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    await pool.execute('DELETE FROM products WHERE id = ?', [req.params.id]);

    res.json({
      success: true,
      message: 'Product deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error deleting product',
      error: error.message
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK',
    message: 'DAKS NDT Backend is running',
    database: 'MySQL',
    uploadsDir: uploadsDir,
    uploadsExists: fs.existsSync(uploadsDir)
  });
});

// Error handling for multer
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'File too large. Maximum size is 5MB'
      });
    }
  }
  res.status(500).json({
    success: false,
    message: error.message
  });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Uploads directory: ${uploadsDir}`);
  console.log('Database: MySQL');
});
