
const express = require('express');

const router = express.Router();

const adminController = require('../controllers/adminController');

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProducts);

router.get('/product-list', adminController.getProductList);

module.exports = router;
