const fs = require('fs');
const path = require('path');

const fetchProductFromFile = () => {
  const filePath = path.join(process.cwd(), 'data', 'product.json');
  return filePath
};
module.exports = class Product {
  constructor(product) {
    this.title = product;
  }

  save() {
    // console.log('this--', this);
    // console.log('this product--', this.title);
    // productArr.push(this);
    let products = [];
    const filePath = fetchProductFromFile()
    fs.readFile(filePath, (error, fileContent) => {
      if (!error) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    const filePath = fetchProductFromFile();
    const file = fs.readFile(filePath, (error, fileContent) => {
      if (error) cb([]);
      console.log('CONTENT', JSON.parse(fileContent));
      cb(JSON.parse(fileContent));
    });
  }
};
