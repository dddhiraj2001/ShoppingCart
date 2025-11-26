// Simple in-memory product store for Vercel demo

const products = [];

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.id = Math.random().toString();
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    products.push(this);
  }

  static fetchAll(cb) {
    cb(products);
  }
};
