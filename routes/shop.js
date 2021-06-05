const path = require('path');

const express = require('express');


const adminData = require('./admin');

const router = express.Router();
 
router.get('/', (req, res, next) => {
  console.log('shop.js', adminData.products);
  const products = adminData.products
  // res.sendFile(path.join(process.cwd(), 'views', 'shop.html'));
  res.render('shop', { products, pageTitle: 'Shop Page', path: 'shop' });
});

module.exports = router;
