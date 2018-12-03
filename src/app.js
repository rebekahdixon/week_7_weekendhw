const Makeup = require('./models/makeup.js')
const MakeupView = require('./views/makeup_view.js')
const MakeupListView = require('./views/makeup_list_view.js')
const SelectView = require('./views/select_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const makeup = new Makeup();
  makeup.getData();
  makeup.bindEvents();

  const productContainer = document.querySelector('#products-container');
  const makeupListView = new MakeupListView(productContainer);
  makeupListView.bindEvents();

  const productsSelect = document.querySelector('#products');
const productsSelectView = new SelectView(productsSelect);
productsSelectView.bindEvents();

});
