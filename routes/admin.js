const path = require('path');

const express = require('express');


const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  // res.sendFile(path.join(process.cwd(), 'views', 'add-product.html'));
  res.render('add-product', { pageTitle: 'Add Product' });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  // console.log(req.body); // input name 
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
