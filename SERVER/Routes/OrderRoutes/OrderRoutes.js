const express = require('express');
const OrderController = require('../../Controllers/OrderController/OrderController'); // Import the OrderController

const router = express.Router();

// Create an Order
router.post('/orders', OrderController.createOrder);

// Get an Order by ID
router.get('/orders/:orderId', OrderController.getOrderById);

// Update Order Status
router.put('/orders/:orderId/status', OrderController.updateOrderStatus);

// Delete an Order
router.delete('/orders/:orderId', OrderController.deleteOrder);

// Get Orders by Customer ID
router.get('/orders/customer/:cid', OrderController.getOrdersByCustomerId);

module.exports = router;
