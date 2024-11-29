const express = require('express');
const router = express.Router();
const PaymentController = require('../../Controllers/PaymentController/paymentController');

// Route to create a payment order
router.post('/', PaymentController.createPaymentOrder);

// Route to capture the payment after successful transaction
router.post('/show', PaymentController.capturePayment);

// Route to get payment details by payment_id
router.get('/:payment_id', PaymentController.getPaymentDetails);

// Route to update payment status
router.put('/update', PaymentController.updatePaymentStatus);

module.exports = router;
