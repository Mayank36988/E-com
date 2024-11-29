const express = require('express');
const router = express.Router();
const cartController = require('../../Controllers/AddtocardController/addtocardController');

// Route to add item to cart
router.post('/', cartController.addItemToCart);

// Route to view cart items for a customer
router.get('/:cid', cartController.viewCartItems);

// Route to update quantity of an item in the cart
router.put('/', cartController.updateCartItemQuantity);

// Route to remove an item from the cart
router.delete('/', cartController.removeItemFromCart);

module.exports = router;