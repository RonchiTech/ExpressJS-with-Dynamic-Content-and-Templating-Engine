const Product = require('../models/productModel')
exports.getCart = (req, res, next) => {
  res.render('shop/cart', { pageTitle: 'Cart', path: 'cart' });
};

exports.getProductList = (req, res, next) => {
  res.render('shop/index', { pageTitle: 'Product List', path: 'product' });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', { pageTitle: 'Checkout', path: 'checkout' });
};

exports.getShopProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      products,
      pageTitle: 'Shop Page',
      path: 'shop',
    });
  });
  // console.log('THE PRODUCT', products);
  // res.sendFile(path.join(process.cwd(), 'views', 'shop.html'));
};