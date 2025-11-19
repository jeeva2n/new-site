const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    default: 'admin'
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    default: 'admin@daksndt.com'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Admin', adminSchema);
