const Product = require('../models/productModel.js');
exports.getAddProducts = (req, res, next) => {
  // res.sendFile(path.join(process.cwd(), 'views', 'add-product.html'));
  res.render('add-product', { pageTitle: 'Add Product', path: 'admin' });
};

exports.postAddProducts = (req, res, next) => {
  console.log('title--', req.body.title);
  const product = new Product(req.body.title);
  product.save();
  // products.push({ title: req.body.title });
  // console.log(req.body); // input name
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll()
  console.log('THE PRODUCT', products);
  // res.sendFile(path.join(process.cwd(), 'views', 'shop.html'));
  res.render('shop', { products, pageTitle: 'Shop Page', path: 'shop' });
};
