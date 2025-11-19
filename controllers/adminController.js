const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Admin login
const login = async (req, res) => {
  try {
    const { password, username } = req.body;
    
    // Find admin
    let admin = await Admin.findOne({ username: username || 'admin' });
    
    // Create default admin if not exists
    if (!admin) {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      admin = new Admin({ 
        username: 'admin',
        password: hashedPassword,
        email: 'admin@daksndt.com'
      });
      await admin.save();
    }

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
        id: admin._id,
        username: admin.username 
      }, 
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    res.json({ 
      success: true,
      token,
      admin: {
        id: admin._id,
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
};

// Change password
const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    
    const admin = await Admin.findById(req.adminId);
    if (!admin) {
      return res.status(404).json({ 
        success: false,
        message: 'Admin not found' 
      });
    }

    const validPassword = await bcrypt.compare(currentPassword, admin.password);
    if (!validPassword) {
      return res.status(401).json({ 
        success: false,
        message: 'Current password is incorrect' 
      });
    }

    admin.password = await bcrypt.hash(newPassword, 10);
    await admin.save();

    res.json({ 
      success: true,
      message: 'Password changed successfully' 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: 'Error changing password' 
    });
  }
};

module.exports = {
  login,
  changePassword
};
