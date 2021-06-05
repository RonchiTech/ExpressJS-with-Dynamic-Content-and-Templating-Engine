
const express = require('express');

const router = express.Router();

const productController = require('../controllers/productsController');

// /admin/add-product => GET
router.get('/add-product', productController.getAddProducts);

// /admin/add-product => POST
router.post('/add-product', productController.postAddProducts);

module.exports = router;
