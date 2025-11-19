const Product = require('../models/Product');
const fs = require('fs');
const path = require('path');

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const { category, search } = req.query;
    let query = {};

    if (category && category !== 'All') {
      query.category = category;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    const products = await Product.find(query).sort({ createdAt: -1 });
    res.json({
      success: true,
      count: products.length,
      products
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Error fetching products',
      error: error.message
    });
  }
};

// Get single product
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({ 
        success: false,
        message: 'Product not found' 
      });
    }

    res.json({
      success: true,
      product
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Error fetching product',
      error: error.message
    });
  }
};

// Create new product
const createProduct = async (req, res) => {
  try {
    const { name, description, category, subcategory, specifications, price } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ 
        success: false,
        message: 'Product image is required' 
      });
    }

    const product = new Product({
      name,
      description,
      category,
      subcategory,
      specifications: specifications || '',
      price: price || 0,
      imageUrl: '/uploads/' + req.file.filename
    });

    await product.save();
    
    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      product
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Error creating product',
      error: error.message
    });
  }
};

// Update product
const updateProduct = async (req, res) => {
  try {
    const { name, description, category, subcategory, specifications, price, inStock } = req.body;
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ 
        success: false,
        message: 'Product not found' 
      });
    }

    // Update fields
    product.name = name || product.name;
    product.description = description || product.description;
    product.category = category || product.category;
    product.subcategory = subcategory || product.subcategory;
    product.specifications = specifications || product.specifications;
    product.price = price !== undefined ? price : product.price;
    product.inStock = inStock !== undefined ? inStock : product.inStock;

    // Update image if new one is uploaded
    if (req.file) {
      // Delete old image
      const oldImagePath = path.join(__dirname, '..', product.imageUrl);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
      product.imageUrl = '/uploads/' + req.file.filename;
    }

    await product.save();

    res.json({
      success: true,
      message: 'Product updated successfully',
      product
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Error updating product',
      error: error.message
    });
  }
};

// Delete product
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ 
        success: false,
        message: 'Product not found' 
      });
    }

    // Delete image file
    const imagePath = path.join(__dirname, '..', product.imageUrl);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    await product.deleteOne();

    res.json({
      success: true,
      message: 'Product deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Error deleting product',
      error: error.message
    });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
