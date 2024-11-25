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
- git clone https://github.com/Sumit1911/Bargenix_Sumit-Kumar_Backend.git
- cd Bargenix_Sumit-Kumar_Backend

### 2. Install dependencies
- npm install

### 3. Configure environment variables
- Create a .env file in the root directory and add the following environment variables:
- PORT=3000
- MONGO_URI=mongodb://localhost:27017/coupon-management
- JWT_SECRET=your-secret-key
- Replace MONGO_URI with your MongoDB connection string and JWT_SECRET with a secure secret key.

### 4. Start the MongoDB server
- If running MongoDB locally:
mongod

### 5. Start the application
npm run dev/npm start


## API Endpoints

**User Routes**

- Register a New User
- Method: POST
- Endpoint: /api/users/register
- Description: Registers a new user.
![image](https://github.com/user-attachments/assets/e201d1c5-85c2-46fa-bde5-7cec3eb69bc1)

**Login a User**

- Method: POST
- Endpoint: /api/users/login
- Description: Logs in an existing user and provides a JWT token.
![image](https://github.com/user-attachments/assets/cda897a9-72d0-4a30-8475-bbda78e399e1)

**Product Routes**

- Create a Product
- Method: POST
- Endpoint: /api/products/addProducts
- Description: Creates a new product. Requires JWT authentication.
![image](https://github.com/user-attachments/assets/a975b7ee-c07f-4333-b93e-e34f78256f81)

**Coupon Routes**

- Generate a Coupon
- Method: POST
- Endpoint: /api/coupons/generate
- Description: Generates a unique, time-bound coupon for a product. Requires JWT authentication.
![image](https://github.com/user-attachments/assets/d28181dc-c427-49b6-99b1-65cc91c33f1e)

**Validate a Coupon**

- Method: POST
- Endpoint: /api/coupons/validate
- Description: Validates a coupon for a product and user. Requires JWT authentication.
![image](https://github.com/user-attachments/assets/98a1eb6c-7c05-4ed4-b0fb-454e1208d987)










