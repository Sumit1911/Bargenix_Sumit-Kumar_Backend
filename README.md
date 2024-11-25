# Coupon Management API

## Description

This is a Node.js-based API for managing products, users, and discount coupons. It includes endpoints for user registration, login, product creation, coupon generation, and validation.
The project uses MongoDB for the database, JWT for user authentication, and Express for routing.

---

## Features

- User registration and login with secure password storage.
- Product creation and management.
- Coupon generation for specific products.
- Coupon validation for a user and product.
- API authentication using JWT tokens.

---

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **JWT** (JSON Web Token)
- **bcrypt** (Password hashing)

---

## Prerequisites

Ensure the following are installed on your system:

1. [Node.js](https://nodejs.org/) (v16 or later)
2. [MongoDB](https://www.mongodb.com/try/download/community) (local or cloud-based)
3. [Git](https://git-scm.com/)

---

## Setup Instructions

Follow these steps to set up the project locally:

### 1. Clone the repository
git clone https://github.com/Sumit1911/Bargenix_Sumit-Kumar_Backend.git
cd Bargenix_Sumit-Kumar_Backend

### 2. Install dependencies
npm install

### 3. Configure environment variables
Create a .env file in the root directory and add the following environment variables:
PORT=3000
MONGO_URI=mongodb://localhost:27017/coupon-management
JWT_SECRET=your-secret-key
Replace MONGO_URI with your MongoDB connection string and JWT_SECRET with a secure secret key.

### 4. Start the MongoDB server
If running MongoDB locally:
mongod

### 5. Start the application
npm run dev/npm start


### API Endpoints
User Routes
## HTTP   Method	Endpoint	      Description
   POST	 /api/users/register	  Register a new user
   POST	 /api/users/login     	Login an existing user

Product Routes
## HTTP   Method Endpoint	               Description
   POST	 /api/products/addProducts	     Create a new product

Coupon Routes
## HTTP   Method	Endpoint	      Description
   POST	 /api/coupons/generate	Generate a coupon for a product
   POST	 /api/coupons/validate	Validate a coupon for a user/product



