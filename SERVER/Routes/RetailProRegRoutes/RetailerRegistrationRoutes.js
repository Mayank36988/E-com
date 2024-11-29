const express = require('express');
const router = express.Router();
const retailerRegistrationController = require('../../Controllers/RetailProRegController/RetailerRegistrationController');
const { authenticate } = require('../../Middlewares/AuthMiddleware'); // Ensure this is correctly imported

// Fix the login route: Remove the authenticate middleware
router.post('/login', retailerRegistrationController.loginRetailer); // No authenticate middleware on login

// Logout should still require authentication to ensure that a valid session is logged out
router.post('/logout', authenticate, retailerRegistrationController.logoutRetailer); // Logout route

// Protected route, requires authentication
router.get('/protected-route', authenticate, (req, res) => {
    console.log('User from req.user:', req.user); // Log user from req.user
    res.json({ message: 'Welcome, authenticated retailer!', user: req.user });
});

router.get('/', retailerRegistrationController.getAllRetailers); // Get all retailers
router.get('/:retid', retailerRegistrationController.getRetailerById); // Get a retailer by ID
router.post('/', retailerRegistrationController.createRetailer); // Create a new retailer
router.patch('/:retid', retailerRegistrationController.updateRetailerDetails); // Update retailer details
router.delete('/:retid', retailerRegistrationController.deleteRetailer); // Delete a retailer

module.exports = router;
