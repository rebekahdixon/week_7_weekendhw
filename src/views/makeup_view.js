const MakeupView= function (parent) {
  this.parent = parent;
};

MakeupView.prototype.render = function (makeup) {
  const container = document.createElement('div');
  container.classList.add('makeup');

  const makeupName = document.createElement('h2');
  makeupName.textContent = makeup.name;
  container.appendChild(makeupName);

  const productType = document.createElement('p');
  productType.textContent = `Product Type: ${ makeup.product_type }`;
  container.appendChild(productType);

  // const category = document.createElement('p');
  // category.textContent = `Catergory: ${ makeup.category }`;
  // container.appendChild(category);

  const price = document.createElement('p');
  price.textContent = `Price: $${ makeup.price }`;
  container.appendChild(price);

  const image = document.createElement('img');
  image.src = makeup.image_link;
  container.appendChild(image);

  const description = document.createElement('p');
  description.textContent = `Description: ${ makeup.description }`;
  container.appendChild(description);

  this.parent.appendChild(container);
};

module.exports = MakeupView;
