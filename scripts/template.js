function menuCategoryTemplate(menuRef, i) {
  return /*html*/ `
    <div class="dish-category">
      <div class="line"></div>
      <img src="${menuRef.image}" alt="${menuRef.title}" class="dish-image">
      <h2>${menuRef.title}:</h2>
      <div id="dish_description_${i}"></div>
    </div>
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
    ${item.amount}× ${item.name} – ${sum.toFixed(2)} €
    <button onclick="removeFromCart('${item.name}')" class="btn remove">-</button>
  </div>
  <div class="line">
  </div>`;
}
