const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const mysql = require('mysql2/promise');

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
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create uploads directory if not exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
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
  limits: { fileSize: 5 * 1024 * 1024 }
});

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  
  if (!token) {
    return res.status(403).json({ 
      success: false,
      message: 'No token provided' 
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    req.adminId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ 
      success: false,
      message: 'Invalid token' 
    });
  }
};

// Admin login
app.post('/api/admin/login', async (req, res) => {
  try {
    const { password } = req.body;
    
    const [rows] = await pool.execute(
      'SELECT * FROM admins WHERE username = ?',
      ['admin']
    );

    if (rows.length === 0) {
      return res.status(401).json({ 
        success: false,
        message: 'Admin not found' 
      });
    }

    const admin = rows[0];
    const validPassword = await bcrypt.compare(password, admin.password);
    
    if (!validPassword) {
      return res.status(401).json({ 
        success: false,
        message: 'Invalid password' 
      });
    }

    const token = jwt.sign(
      { id: admin.id, username: admin.username }, 
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    res.json({ 
      success: true,
      token,
      admin: {
        id: admin.id,
        username: admin.username,
        email: admin.email
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Server error' 
    });
  }
});

// Get all products
app.get('/api/products', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM products ORDER BY created_at DESC');
    res.json({
      success: true,
      products: rows
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error fetching products' 
    });
  }
});

// Create new product
app.post('/api/products', upload.single('image'), async (req, res) => {
  try {
    const { name, description, category, subcategory } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ 
        success: false,
        message: 'Image is required' 
      });
    }

    const imageUrl = '/uploads/' + req.file.filename;

    const [result] = await pool.execute(
      `INSERT INTO products (name, description, category, subcategory, image_url) 
       VALUES (?, ?, ?, ?, ?)`,
      [name, description, category, subcategory, imageUrl]
    );

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      productId: result.insertId
    });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error creating product' 
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
      message: 'Error deleting product' 
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK',
    message: 'DAKS NDT Backend is running',
    database: 'MySQL'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
