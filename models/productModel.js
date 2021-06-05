const productArr = [];
module.exports = class Product {
  constructor(product) {
    this.title = product;
  }

  save() {
    console.log('this--',this);
    console.log('this product--', this.title);
    productArr.push(this);
  }

  static fetchAll() {
    return productArr;
  }
};
