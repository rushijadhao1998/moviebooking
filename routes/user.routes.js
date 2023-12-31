const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// POST /api/auth/signup
router.post('/auth/signup', userController.signUp);

// POST /api/auth/login
router.post('/auth/login', userController.login);

// POST /api/auth/logout
router.post('/auth/logout', userController.logout);

// GET /api/getCouponCode
router.get('/getCouponCode', userController.getCouponCode);

// POST /api/bookShow
router.post('/bookShow', userController.bookShow);

module.exports = router;
