const PubSub = require('../helpers/pub_sub.js');
const MakeupView = require('./makeup_view.js');

const MakeupListView = function (container) {
  this.container = container;
};

MakeupListView.prototype.bindEvents = function () {
  PubSub.subscribe('Makeups:all-ready', event => {
    const makeups = event.detail;
    console.log(makeups);
    this.render(makeups);
  });
};

MakeupListView.prototype.render = function (makeups) {
  this.container.innerHTML = '';
  makeups.forEach(makeup => {
    const makeupListView = new MakeupView(this.container);
    makeupListView.render(makeup);
  });
};

module.exports = MakeupListView;
