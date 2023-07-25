const fs = require("fs");
const path = require("path");
const p = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "products.json"
  );
const getProductsFromFile = cb => {
  // This helper function will create path & also read the file
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};
module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
  save() {
    // const p = path.join(
    //   path.dirname(process.mainModule.filename),
    //   "data",
    //   "products.json"
    // );
    getProductsFromFile(products => {
      products.push(this); // to use this use arrow function
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
    // fs.readFile(p, (err, fileContent) => {});
  }
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
