const Coupon = require('../models/coupon.model');
const { generateCouponCode } = require('../utils/coupon.utils');

const couponController = {
    generateCoupon: async (req, res) => {
        try {
            const { productId, userId, discountAmount, validityDays } = req.body;
            
            // Generate unique coupon code
            const code = await generateCouponCode();
            
            // Set expiry date
            const expiryDate = new Date();
            expiryDate.setDate(expiryDate.getDate() + (validityDays || 7));

            const coupon = new Coupon({
                code,
                productId,
                userId,
                discount: discountAmount,
                expiryDate
            });

            await coupon.save();
            
            res.status(201).json({
                success: true,
                data: coupon
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    },

    validateCoupon: async (req, res) => {
        try {
            const { code, productId, userId } = req.body;

            const coupon = await Coupon.findOne({ code });

            if (!coupon) {
                return res.status(404).json({
                    success: false,
                    error: 'Invalid coupon code'
                });
            }

            if (coupon.isUsed) {
                return res.status(400).json({
                    success: false,
                    error: 'Coupon already used'
                });
            }

            if (coupon.expiryDate < new Date()) {
                return res.status(400).json({
                    success: false,
                    error: 'Coupon has expired'
                });
            }

            if (coupon.productId.toString() !== productId || coupon.userId !== userId) {
                return res.status(400).json({
                    success: false,
                    error: 'Coupon not valid for this product or user'
                });
            }

            res.json({
                success: true,
                data: coupon
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }
};

module.exports = couponController;