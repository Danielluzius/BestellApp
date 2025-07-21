function init() {
  renderMenu();
  renderMenuItems();
}

let menuContainer = document.getElementById('menu_sections');

function renderMenu() {
  let menuHtml = '';

  for (let index = 0; index < menu.length; index++) {
    const menuRef = menu[index];
    menuHtml += menuTemplate(menuRef, index);
  }

  menuContainer.innerHTML = menuHtml;
}

function renderMenuItems() {
  for (let i = 0; i < menu.length; i++) {
    const menuRef = menu[i].items;
    const targetId = document.getElementById(`dish_description_${i}`);

    let itemsHtml = '';

    for (let j = 0; j < menuRef.length; j++) {
      itemsHtml += itemTemplate(menuRef[j]);
    }

    targetId.innerHTML = itemsHtml;
  }
}

function renderCart() {
  let cartContent = document.getElementById('cart-content');
  let cartTotal = document.getElementById('cart-total');
  let html = '';

  let total = 0;

  if (cart.length === 0) {
    cartContent.innerHTML = 'Noch nichts ausgewählt.';
    cartTotal.innerHTML = 'Gesamt: 0,00 €';
    return;
  }

  for (let item of cart) {
    let itemTotal = item.price * item.amount;
    total += itemTotal;

    html += /*html*/ `
    <div>${item.amount}× ${item.name} – ${itemTotal.toFixed(2)} €
    </div>`;
  }

  cartContent.innerHTML = html;
  cartTotal.innerHTML = `Gesamt: ${total.toFixed(2)} €`;
}

function getValueFromInput(id) {
  return document.getElementById(id).value;
}

function getMenuFromInput() {
  return getValueFromInput('menu.items.name').trim();
}

function getPriceFromInput() {
  return parseFloat(getValueFromInput('menu.items.price'));
}

let cart = [];

function onAddMenu(name, price) {
  let index = cart.findIndex((item) => item.name === name);

  if (index === -1) {
    cart.push({ name, price, amount: 1 });
  } else {
    cart[index].amount++;
  }

  renderCart();
}

function getMenuIndex(menu) {
  return menus.indexOf(menu);
}
