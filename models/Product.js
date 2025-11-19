const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: [
      'Welded Specimens',
      'Base Material Flawed Specimens',
      'Advanced NDT Validation Specimens',
      'POD & Training Specimens'
    ]
  },
  subcategory: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  specifications: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  },
  inStock: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt timestamp on save
productSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Product', productSchema);
