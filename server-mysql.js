const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const db = require('./config/database-mysql');

const app = express();

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

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|webp/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Only image files are allowed'));
  }
};

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: fileFilter
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
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'daks_ndt_2024_$ecure_k3y');
    req.adminId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ 
      success: false,
      message: 'Invalid or expired token' 
    });
  }
};

// Routes

// Admin login
app.post('/api/admin/login', async (req, res) => {
  try {
    const { password, username } = req.body;
    
    // Get admin from database
    const [rows] = await db.execute(
      'SELECT * FROM admins WHERE username = ?',
      [username || 'admin']
    );

    if (rows.length === 0) {
      return res.status(401).json({ 
        success: false,
        message: 'Invalid credentials' 
      });
    }

    const admin = rows[0];

    // Verify password
    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword) {
      return res.status(401).json({ 
        success: false,
        message: 'Invalid credentials' 
      });
    }

    // Generate token
    const token = jwt.sign(
      { 
        id: admin.id,
        username: admin.username 
      }, 
      process.env.JWT_SECRET || 'daks_ndt_2024_$ecure_k3y',
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
      message: 'Server error during login' 
    });
  }
});

// Get all products
app.get('/api/products', async (req, res) => {
  try {
    const { category, search } = req.query;
    let query = 'SELECT * FROM products WHERE 1=1';
    const params = [];

    if (category && category !== 'All') {
      query += ' AND category = ?';
      params.push(category);
    }

    if (search) {
      query += ' AND (name LIKE ? OR description LIKE ?)';
      params.push(`%${search}%`, `%${search}%`);
    }

    query += ' ORDER BY created_at DESC';

    const [rows] = await db.execute(query, params);

    res.json({
      success: true,
      count: rows.length,
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

// Get single product
app.get('/api/products/:id', async (req, res) => {
  try {
    const [rows] = await db.execute(
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
    res.status(500).json({ 
      success: false,
      message: 'Error fetching product' 
    });
  }
});

// Create new product
app.post('/api/products', upload.single('image'), async (req, res) => {
  try {
    const { name, description, category, subcategory, specifications, price } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ 
        success: false,
        message: 'Product image is required' 
      });
    }

    const imageUrl = '/uploads/' + req.file.filename;

    const [result] = await db.execute(
      `INSERT INTO products (name, description, category, subcategory, image_url, specifications, price) 
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, description, category, subcategory, imageUrl, specifications || '', price || 0]
    );

    const [newProduct] = await db.execute(
      'SELECT * FROM products WHERE id = ?',
      [result.insertId]
    );

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      product: newProduct[0]
    });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error creating product' 
    });
  }
});

// Update product
app.put('/api/products/:id', verifyToken, upload.single('image'), async (req, res) => {
  try {
    const { name, description, category, subcategory, specifications, price, in_stock } = req.body;
    
    // Check if product exists
    const [existing] = await db.execute(
      'SELECT * FROM products WHERE id = ?',
      [req.params.id]
    );

    if (existing.length === 0) {
      return res.status(404).json({ 
        success: false,
        message: 'Product not found' 
      });
    }

    let imageUrl = existing[0].image_url;

    // Handle new image upload
    if (req.file) {
      // Delete old image
      const oldImagePath = path.join(__dirname, existing[0].image_url);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
      imageUrl = '/uploads/' + req.file.filename;
    }

    // Update product
    await db.execute(
      `UPDATE products 
       SET name = ?, description = ?, category = ?, subcategory = ?, 
           image_url = ?, specifications = ?, price = ?, in_stock = ?
       WHERE id = ?`,
      [
        name || existing[0].name,
        description || existing[0].description,
        category || existing[0].category,
        subcategory || existing[0].subcategory,
        imageUrl,
        specifications !== undefined ? specifications : existing[0].specifications,
        price !== undefined ? price : existing[0].price,
        in_stock !== undefined ? in_stock : existing[0].in_stock,
        req.params.id
      ]
    );

    const [updatedProduct] = await db.execute(
      'SELECT * FROM products WHERE id = ?',
      [req.params.id]
    );

    res.json({
      success: true,
      message: 'Product updated successfully',
      product: updatedProduct[0]
    });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error updating product' 
    });
  }
});

// Delete product
app.delete('/api/products/:id', async (req, res) => {
  try {
    // Get product details first
    const [rows] = await db.execute(
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

    // Delete from database
    await db.execute(
      'DELETE FROM products WHERE id = ?',
      [req.params.id]
    );

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
    message: 'DAKS NDT Backend is running (MySQL)',
    timestamp: new Date()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Database: MySQL');
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
