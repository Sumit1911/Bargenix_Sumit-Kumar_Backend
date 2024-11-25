// controllers/product.controller.js

const Product = require('../models/product.model'); // Make sure your Product model is correctly imported

// Function to add a new product
exports.addProduct = async (req, res) => {
  try {
    // Extracting data from the request body
    const { name, price, description } = req.body;

    // Check if all required fields are present
    if (!name || !price || !description) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: name, price, and description.',
      });
    }

    // Create a new product instance
    const newProduct = new Product({
      name,
      price,
      description,
    });

    // Save the product to the database
    const savedProduct = await newProduct.save();

    // Send success response
    res.status(201).json({
      success: true,
      data: savedProduct,
    });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message,
    });
  }
};
