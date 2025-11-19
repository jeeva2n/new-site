const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();

const Admin = require('./models/Admin');
const Product = require('./models/Product');

const setupDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/daks-ndt');
    console.log('Connected to MongoDB');

    // Create default admin
    const existingAdmin = await Admin.findOne({ username: 'admin' });
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      const admin = new Admin({
        username: 'admin',
        password: hashedPassword,
        email: 'admin@daksndt.com'
      });
      await admin.save();
      console.log('Default admin created (username: admin, password: admin123)');
    } else {
      console.log('Admin already exists');
    }

    // Create sample products
    const sampleProducts = [
      {
        name: 'Butt Weld Specimen BW-001',
        description: 'High-quality butt weld specimen for ultrasonic testing validation',
        category: 'Welded Specimens',
        subcategory: 'Butt Weld',
        imageUrl: '/uploads/sample-butt-weld.jpg',
        specifications: 'Material: Carbon Steel, Thickness: 25mm',
        price: 5000
      },
      {
        name: 'Fillet Weld Specimen FW-001',
        description: 'Precision fillet weld specimen for NDT training',
        category: 'Welded Specimens',
        subcategory: 'Fillet Weld',
        imageUrl: '/uploads/sample-fillet-weld.jpg',
        specifications: 'Material: Stainless Steel, Size: 150x150mm',
        price: 4500
      }
    ];

    const existingProducts = await Product.countDocuments();
    if (existingProducts === 0) {
      await Product.insertMany(sampleProducts);
      console.log('Sample products created');
    } else {
      console.log(`Database already has ${existingProducts} products`);
    }

    console.log('Database setup completed');
    process.exit(0);
  } catch (error) {
    console.error('Setup error:', error);
    process.exit(1);
  }
};

setupDatabase();
