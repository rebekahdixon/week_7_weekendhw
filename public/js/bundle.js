/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Makeup = __webpack_require__(/*! ./models/makeup.js */ \"./src/models/makeup.js\")\nconst MakeupView = __webpack_require__(/*! ./views/makeup_view.js */ \"./src/views/makeup_view.js\")\nconst MakeupListView = __webpack_require__(/*! ./views/makeup_list_view.js */ \"./src/views/makeup_list_view.js\")\nconst SelectView = __webpack_require__(/*! ./views/select_view.js */ \"./src/views/select_view.js\")\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('JavaScript Loaded');\n\n  const makeup = new Makeup();\n  makeup.getData();\n  makeup.bindEvents();\n\n  const productContainer = document.querySelector('#products-container');\n  const makeupListView = new MakeupListView(productContainer);\n  makeupListView.bindEvents();\n\n  const productsSelect = document.querySelector('#products');\nconst productsSelectView = new SelectView(productsSelect);\nproductsSelectView.bindEvents();\n\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request_helper.js":
/*!***************************************!*\
  !*** ./src/helpers/request_helper.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RequestHelper = function (url) {\n  this.url = url;\n};\n\nRequestHelper.prototype.get = function () {\n  return fetch(this.url)\n    .then(response => response.json());\n};\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./src/helpers/request_helper.js?");

/***/ }),

/***/ "./src/models/makeup.js":
/*!******************************!*\
  !*** ./src/models/makeup.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./src/helpers/request_helper.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst Makeup = function () {\n  this.data = [];\n};\n\nMakeup.prototype.getData = function () {\n  const url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx`;\n  const request = new RequestHelper(url);\n  request.get()\n  .then((makeups) => {\n    this.data = makeups;\n    PubSub.publish('Makeups:all-ready', this.data);\n  })\n};\n\n\nMakeup.prototype.bindEvents = function () {\n  PubSub.subscribe('SelectView:product-selected', (event) => {\n    const selectedIndex = event.detail;\n    const product = this.data[selectedIndex].product_type;\n    this.getDataForProductType(product);\n  });\n};\n\nMakeup.prototype.getDataForProductType = function (makeupType) {\n  console.log('hello');\n  const url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx&product_type=${makeupType}`;\n  const request = new RequestHelper(url);\n  request.get()\n  .then((makeups) => {\n    this.data = makeups;\n    PubSub.publish('Products:info-loaded', this.data);\n    console.log(makeups);\n  });\n};\n\nmodule.exports = Makeup;\n\n\n//# sourceURL=webpack:///./src/models/makeup.js?");

/***/ }),

/***/ "./src/views/makeup_list_view.js":
/*!***************************************!*\
  !*** ./src/views/makeup_list_view.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst MakeupView = __webpack_require__(/*! ./makeup_view.js */ \"./src/views/makeup_view.js\");\n\nconst MakeupListView = function (container) {\n  this.container = container;\n};\n\nMakeupListView.prototype.bindEvents = function () {\n  PubSub.subscribe('Makeups:all-ready', event => {\n    const makeups = event.detail;\n    console.log(makeups);\n    this.render(makeups);\n  });\n};\n\nMakeupListView.prototype.render = function (makeups) {\n  this.container.innerHTML = '';\n  makeups.forEach(makeup => {\n    const makeupListView = new MakeupView(this.container);\n    makeupListView.render(makeup);\n  });\n};\n\nmodule.exports = MakeupListView;\n\n\n//# sourceURL=webpack:///./src/views/makeup_list_view.js?");

/***/ }),

/***/ "./src/views/makeup_view.js":
/*!**********************************!*\
  !*** ./src/views/makeup_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const MakeupView= function (parent) {\n  this.parent = parent;\n};\n\nMakeupView.prototype.render = function (makeup) {\n  const container = document.createElement('div');\n  container.classList.add('makeup');\n\n  const makeupName = document.createElement('h2');\n  makeupName.textContent = makeup.name;\n  container.appendChild(makeupName);\n\n  const productType = document.createElement('p');\n  productType.textContent = `Product Type: ${ makeup.product_type }`;\n  container.appendChild(productType);\n\n  // const category = document.createElement('p');\n  // category.textContent = `Catergory: ${ makeup.category }`;\n  // container.appendChild(category);\n\n  const price = document.createElement('p');\n  price.textContent = `Price: $${ makeup.price }`;\n  container.appendChild(price);\n\n  const image = document.createElement('img');\n  image.src = makeup.image_link;\n  container.appendChild(image);\n\n  const description = document.createElement('p');\n  description.textContent = `Description: ${ makeup.description }`;\n  container.appendChild(description);\n\n  this.parent.appendChild(container);\n};\n\nmodule.exports = MakeupView;\n\n\n//# sourceURL=webpack:///./src/views/makeup_view.js?");

/***/ }),

/***/ "./src/views/select_view.js":
/*!**********************************!*\
  !*** ./src/views/select_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst SelectView = function (element) {\n  this.element = element;\n  this.products = [];\n};\n\nSelectView.prototype.bindEvents = function () {\n  PubSub.subscribe('Makeups:all-ready', event => {\n    this.products = event.detail;\n    this.filterUniqueProductType(this.products);\n    this.populate(this.products);\n    console.log(this.products);\n  });\n\n\n  this.element.addEventListener('change', (event) => {\n    const selectedProduct = event.target.product_type;\n    PubSub.publish('SelectView:product-selected', selectedProduct);\n    console.log(selectedProduct);\n  })\n};\n\nSelectView.prototype.populate = function (uniqueProducts) {\n\n  uniqueProducts.forEach((uniqueProduct, index) => {\n    const option = document.createElement('option');\n    option.textContent = uniqueProduct.product_type;\n    option.value = index;\n    this.element.appendChild(option);\n  });\n};\nSelectView.prototype.filterUniqueProductType = function () {\n\n  uniqueProducts =  this.products.map(makeup => makeup.product_type)\n  .filter((makeup, index, makeups) => makeups.indexOf(makeup) === index);\n  return uniqueProducts;\n};\n\n\n\nmodule.exports = SelectView;\n\n\n//# sourceURL=webpack:///./src/views/select_view.js?");

/***/ })

/******/ });