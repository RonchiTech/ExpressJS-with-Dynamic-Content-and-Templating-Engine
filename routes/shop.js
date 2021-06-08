const path = require('path');

const express = require('express');

const shopController = require('../controllers/shopController');

const router = express.Router();
 
router.get('/', shopController.getShopProducts);

router.get('/cart', shopController.getCart);

router.get('/products', shopController.getProductList);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
