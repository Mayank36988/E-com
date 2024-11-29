const express = require('express');
const customerController = require('../../Controllers/CustomerController/CustomerController');
const verifyToken = require('../../Middlewares/authMiddleware '); 
const router = express.Router();


router.get('/customers/:cid', customerController.getCustomerById);
router.get('/customer/details', verifyToken, (req, res) => {
 
  res.json({ cid: req.cid, customer_name: req.customer_name });
});

router.post('/customers', customerController.createCustomer);
router.post('/customers/login', customerController.loginCustomer);
router.post('/customers/verify-otp', customerController.verifyOTP);
router.patch('/customers/:cid', verifyToken, customerController.updateCustomer); 
router.post('/customers/logout', customerController.logoutCustomer);

module.exports = router;
