function menuCategoryTemplate(menuRef, i) {
  return /*html*/ `
    <div class="dish-category">
      <img src="${menuRef.image}" alt="${menuRef.title}" class="dish-image">
      <h2>${menuRef.title}:</h2>
      <div id="dish_description_${i}"></div>
    </div>
    <div class="line"></div>
  `;
}

function menuItemTemplate(item) {
  return /*html*/ `
    <div class="dish-item">
      <div class="dish-item-container">
        <h3>${item.name}</h3>
        <p>Preis: ${item.price.toFixed(2)} €</p>
        <p>${item.description}</p>
      </div>
      <button onclick="onAddMenu('${item.name}', ${item.price})" class="btn add-to-cart">+</button>
    </div>
  `;
}

function cartItemTemplate(item) {
  let sum = item.price * item.amount;
  return /*html*/ `
  <div class="cart-item">
    ${item.amount}× ${item.name} <br> – ${sum.toFixed(2)} €
    <div class="add-flex">
    <button onclick="onAddMenu('${item.name}', ${item.price})" class="btn add-to-cart">+</button>
    <button onclick="onRemoveMenu('${item.name}', ${item.price})" class="btn remove">-</button>
    </div>
  </div>
  <div class="line-cart">
  </div>`;
}
