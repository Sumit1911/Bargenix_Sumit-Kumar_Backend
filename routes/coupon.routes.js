const express = require('express');
const router = express.Router();
const couponController = require('../controllers/coupon.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/generate', couponController.generateCoupon);
router.post('/validate', couponController.validateCoupon);

module.exports = router;
