const express = require('express');
const router = express.Router();
const { login, changePassword } = require('../controllers/adminController');
const { verifyToken } = require('../middleware/auth');

// Public routes
router.post('/login', login);

// Protected routes
router.post('/change-password', verifyToken, changePassword);

module.exports = router;
