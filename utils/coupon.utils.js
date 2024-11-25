const { nanoid } = require('nanoid');

const generateCouponCode = async () => {
    return `COUP${nanoid(8).toUpperCase()}`;
};

module.exports = {
    generateCouponCode
};