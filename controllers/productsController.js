const products = [];
exports.getAddProducts = (req, res, next) => {
  // res.sendFile(path.join(process.cwd(), 'views', 'add-product.html'));
  res.render('add-product', { pageTitle: 'Add Product', path: 'admin' });
};

exports.postAddProducts = (req, res, next) => {
  products.push({ title: req.body.title });
  // console.log(req.body); // input name
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {

  // res.sendFile(path.join(process.cwd(), 'views', 'shop.html'));
  res.render('shop', { products, pageTitle: 'Shop Page', path: 'shop' });
}