require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.config');
const couponRoutes = require('./routes/coupon.routes');
const errorHandler = require('./middleware/error.middleware');
const productRoutes = require('./routes/product.routes');
const userRoutes = require("./routes/user.routes");
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/coupons', couponRoutes);
app.use('/api/products', productRoutes);
app.use("/api/users", userRoutes); 

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});