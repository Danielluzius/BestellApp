let cart = [];
const deliveryCosts = 2.5;
const minimumOrder = 20;

function init() {
  renderMenu();
  renderMenuItems();
  renderCart();
}

function calculateDeliveryCosts(total) {
  if (total === 0) {
    return 0;
  }
  if (total < minimumOrder) {
    return deliveryCosts;
  } else {
    return 0;
  }
}

function renderMenu() {
  let menuContainer = document.getElementById('menu_sections');
  let menuHtml = '';
  for (let i = 0; i < menu.length; i++) {
    menuHtml += menuCategoryTemplate(menu[i], i);
  }
  menuContainer.innerHTML = menuHtml;
}

function renderMenuItems() {
  for (let i = 0; i < menu.length; i++) {
    let itemsHtml = '';
    let items = menu[i].items;
    for (let j = 0; j < items.length; j++) {
      itemsHtml += menuItemTemplate(items[j]);
    }
    document.getElementById(`dish_description_${i}`).innerHTML = itemsHtml;
  }
}

function getCartHtmlAndTotal(cart, templateFn) {
  if (cart.length === 0) {
    return getEmptyCartResult();
  }

  let html = '';
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    html = html + templateFn(item);
    total = total + item.price * item.amount;
  }

  let deliveryCosts = calculateDeliveryCosts(total);
  return getFullCartResult(html, total, deliveryCosts);
}

function getEmptyCartResult() {
  return {
    html: 'Noch nichts ausgewählt.',
    total: 0,
    empty: true,
    deliveryCosts: 0,
    worthOfGoods: 0,
  };
}

function getFullCartResult(html, total, deliveryCosts) {
  return {
    html: html,
    total: total + deliveryCosts,
    empty: false,
    deliveryCosts: deliveryCosts,
    worthOfGoods: total,
  };
}

function renderCart() {
  let cartContent = document.getElementById('cart_content');
  let cartTotal = document.getElementById('cart_total');
  let result = getCartHtmlAndTotal(cart, cartItemTemplate);
  let deliveryCostsText;
  if (result.deliveryCosts > 0) {
    deliveryCostsText = 'Lieferkosten: ' + result.deliveryCosts.toFixed(2).replace('.', ',') + ' €';
  } else {
    deliveryCostsText = 'Lieferkosten: 0,00 €';
  }
  cartContent.innerHTML = result.html + '<div class="delivery-costs">' + deliveryCostsText + '</div>';
  cartTotal.innerHTML = 'Gesamt: ' + result.total.toFixed(2).replace('.', ',') + ' €';

  updateCartBadge();
}

function renderCartResponsive() {
  let cartContent = document.getElementById('cart_content_responsive');
  let cartTotal = document.getElementById('cart_total_responsive');
  let result = getCartHtmlAndTotal(cart, cartItemTemplate);
  let deliveryCostsText;
  if (result.deliveryCosts > 0) {
    deliveryCostsText = 'Lieferkosten: ' + result.deliveryCosts.toFixed(2).replace('.', ',') + ' €';
  } else {
    deliveryCostsText = 'Lieferkosten: 0,00 €';
  }
  cartContent.innerHTML = result.html + '<div class="delivery-costs">' + deliveryCostsText + '</div>';
  cartTotal.innerHTML = 'Gesamt: ' + result.total.toFixed(2).replace('.', ',') + ' €';
  updateCartBadge();
}

function onAddMenu(name, price) {
  let index = -1;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      index = i;
      break;
    }
  }
  if (index === -1) {
    cart.push({ name, price, amount: 1 });
  } else {
    cart[index].amount++;
  }
  renderCart();
  renderCartResponsive();
}

function onRemoveMenu(name, price) {
  let index = -1;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) {
      index = i;
      break;
    }
  }
  if (index !== -1) {
    cart[index].amount--;
    if (cart[index].amount <= 0) {
      cart.splice(index, 1);
    }
    renderCart();
    renderCartResponsive();
  }
}

function clearCart() {
  cart = [];
  renderCart();
  renderCartResponsive();
}

function orderNow() {
  if (cart.length === 0) {
    return;
  }
  clearCart();
  showThanksPopup();
}

function showCartPopup() {
  document.getElementById('cart-backdrop').style.display = 'flex';
}

function hideCartPopup() {
  document.getElementById('cart-backdrop').style.display = 'none';
}

function showThanksPopup() {
  document.getElementById('thanks-popup').style.display = 'flex';
}

function hideThanksPopup() {
  document.getElementById('thanks-popup').style.display = 'none';
}

function toggleBurgerMenu() {
  const menu = document.getElementById('burger-menu');
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'flex';
  } else {
    menu.style.display = 'none';
  }
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  let count = 0;
  for (let i = 0; i < cart.length; i++) {
    count += cart[i].amount;
  }
  if (count > 0) {
    badge.style.display = 'inline-block';
    badge.textContent = count;
  } else {
    badge.style.display = 'none';
  }
}
