const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
require('dotenv').config();

async function setupDatabase() {
  let connection;

  try {
    // First connect without database to create it
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || ''
    });

    console.log('Connected to MySQL');

    // Create database
    await connection.query('CREATE DATABASE IF NOT EXISTS daks_ndt');
    console.log('Database created or already exists');

    // Close the connection
    await connection.end();

    // Reconnect with database selected
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: 'daks_ndt'
    });

    console.log('Connected to daks_ndt database');

    // Create admins table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS admins (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Admins table created');

    // Create products table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        category VARCHAR(100) NOT NULL,
        subcategory VARCHAR(100) NOT NULL,
        image_url VARCHAR(500) NOT NULL,
        specifications TEXT,
        price DECIMAL(10, 2) DEFAULT 0,
        in_stock BOOLEAN DEFAULT TRUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    console.log('Products table created');

    // Create indexes
    try {
      await connection.query('CREATE INDEX idx_products_category ON products(category)');
      await connection.query('CREATE INDEX idx_products_subcategory ON products(subcategory)');
      console.log('Indexes created');
    } catch (err) {
      if (err.code === 'ER_DUP_KEYNAME') {
        console.log('Indexes already exist');
      } else {
        throw err;
      }
    }

    // Check if admin exists
    const [admins] = await connection.execute('SELECT * FROM admins WHERE username = ?', ['admin']);
    
    if (admins.length === 0) {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      await connection.execute(
        'INSERT INTO admins (username, password, email) VALUES (?, ?, ?)',
        ['admin', hashedPassword, 'admin@daksndt.com']
      );
      console.log('Default admin created (username: admin, password: admin123)');
    } else {
      console.log('Admin already exists');
    }

    // Insert sample products if none exist
    const [productCount] = await connection.query('SELECT COUNT(*) as count FROM products');
    
    if (productCount[0].count === 0) {
      await connection.execute(
        `INSERT INTO products (name, description, category, subcategory, image_url, specifications, price) 
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          'Butt Weld Specimen BW-001',
          'High-quality butt weld specimen for ultrasonic testing validation',
          'Welded Specimens',
          'Butt Weld',
          '/uploads/sample-butt-weld.jpg',
          'Material: Carbon Steel, Thickness: 25mm',
          5000
        ]
      );

      await connection.execute(
        `INSERT INTO products (name, description, category, subcategory, image_url, specifications, price) 
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          'Fillet Weld Specimen FW-001',
          'Precision fillet weld specimen for NDT training',
          'Welded Specimens',
          'Fillet Weld',
          '/uploads/sample-fillet-weld.jpg',
          'Material: Stainless Steel, Size: 150x150mm',
          4500
        ]
      );
      console.log('Sample products created');
    } else {
      console.log('Products already exist');
    }

    console.log('\n✅ Database setup completed successfully!');
    console.log('You can now run: npm run dev');

  } catch (error) {
    console.error('Setup error:', error);
  } finally {
    if (connection) {
      await connection.end();
    }
    process.exit();
  }
}

setupDatabase();
