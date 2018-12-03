const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Makeup = function () {
  this.data = [];
};

Makeup.prototype.getData = function () {
  const url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx`;
  const request = new RequestHelper(url);
  request.get()
  .then((makeups) => {
    this.data = makeups;
    PubSub.publish('Makeups:all-ready', this.data);
  })
};


Makeup.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:product-selected', (event) => {
    const selectedIndex = event.detail;
    const product = this.data[selectedIndex].product_type;
    this.getDataForProductType(product);
  });
};

Makeup.prototype.getDataForProductType = function (makeupType) {
  console.log('hello');
  const url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx&product_type=${makeupType}`;
  const request = new RequestHelper(url);
  request.get()
  .then((makeups) => {
    this.data = makeups;
    PubSub.publish('Products:info-loaded', this.data);
    console.log(makeups);
  });
};

module.exports = Makeup;
