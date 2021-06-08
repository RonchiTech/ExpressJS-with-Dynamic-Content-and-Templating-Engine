const Product = require('../models/productModel.js');

exports.getAddProducts = (req, res, next) => {
  // res.sendFile(path.join(process.cwd(), 'views', 'add-product.html'));
  res.render('admin/add-product', { pageTitle: 'Add Product', path: 'admin' });
};

exports.getProductList = (req, res, next) => {
    Product.fetchAll((products) => {
      res.render('admin/product-list', {
        products,
        pageTitle: 'Shop Page',
        path: 'product-list',
      });
    });
};

exports.postAddProducts = (req, res, next) => {
  console.log('title--', req.body.title);
  const product = new Product(req.body.title);
  product.save();
  // products.push({ title: req.body.title });
  // console.log(req.body); // input name
  res.redirect('/');
};
