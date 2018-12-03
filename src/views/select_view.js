const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
  this.products = [];
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Makeups:all-ready', event => {
    this.products = event.detail;
    this.filterUniqueProductType(this.products);
    this.populate(this.products);
    console.log(this.products);
  });


  this.element.addEventListener('change', (event) => {
    const selectedProduct = event.target.product_type;
    PubSub.publish('SelectView:product-selected', selectedProduct);
    console.log(selectedProduct);
  })
};

SelectView.prototype.populate = function (uniqueProducts) {

  uniqueProducts.forEach((uniqueProduct, index) => {
    const option = document.createElement('option');
    option.textContent = uniqueProduct.product_type;
    option.value = index;
    this.element.appendChild(option);
  });
};
SelectView.prototype.filterUniqueProductType = function () {

  uniqueProducts =  this.products.map(makeup => makeup.product_type)
  .filter((makeup, index, makeups) => makeups.indexOf(makeup) === index);
  return uniqueProducts;
};



module.exports = SelectView;
