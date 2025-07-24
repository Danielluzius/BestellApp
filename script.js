function init() {
  renderMenu();
  renderMenuItems();
  renderCart();
}

/**
 * Delivery costs for the order.
 * @constant {number}
 */
const deliveryCosts = 2.5;

/**
 * Minimum order value for free delivery.
 * @constant {number}
 */
const minimumOrder = 20;

/**
 * Calculates the delivery costs based on the total order value.
 * @description This function checks if the total order value is below the minimum order value.
 * @param {number} total A Number representing the total order value.
 * @description If the total is less than the minimum order value, delivery costs are applied.
 * @returns {number}
 */
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

/**
 * Renders the menu categories and their items.
 * @description This function generates the HTML for each menu category and its items.
 */
function renderMenu() {
  let menuContainer = document.getElementById('menu_sections');
  let menuHtml = '';
  for (let i = 0; i < menu.length; i++) {
    menuHtml += menuCategoryTemplate(menu[i], i);
  }
  menuContainer.innerHTML = menuHtml;
}

/**
 * Renders the items for each menu category.
 * @description This function generates the HTML for each item in the menu categories.
 */
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

/**
 * Generates the HTML and calculates the total for the cart.
 * @description This function iterates through the cart items, generates the HTML for each item using a template function,
 * @param {Array} cart An array representing the items in the cart.
 * @param {Function} templateFn A function that generates the HTML for a cart item.
 * @returns {Object} An object containing the HTML and total for the cart.
 * If the cart has items, it generates the HTML for each item and calculates the total price
 */
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

/**
 * Generates the HTML and total for an empty cart.
 * @description This function returns an object containing a message indicating that no items have been selected,
 * @returns {Object} An object containing the HTML and total for the empty cart.
 */
function getEmptyCartResult() {
  return {
    html: 'Noch nichts ausgewählt.',
    total: 0,
    empty: true,
    deliveryCosts: 0,
    worthOfGoods: 0,
  };
}

/**
 * Generates the full cart result with HTML and total.
 * @description This function returns an object containing the HTML, total price, delivery costs, and worth of goods.
 * @param {string} html  The HTML content for the cart.
 * @param {number} total  The total price of the cart items.
 * @param {number} deliveryCosts  The delivery costs for the cart.
 * @returns {Object} An object containing the HTML and total for the cart.
 */
function getFullCartResult(html, total, deliveryCosts) {
  return {
    html: html,
    total: total + deliveryCosts,
    empty: false,
    deliveryCosts: deliveryCosts,
    worthOfGoods: total,
  };
}

/**
 * Renders the cart content and total in the main view.
 * @description This function updates the cart content and total in the main view.
 */
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

/**
 * Renders the cart content and total in the responsive view.
 * @description This function updates the cart content and total in the responsive view.
 */
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

/**
 * Adds an item to the cart.
 * @description This function checks if the item is already in the cart. If it is, it increases the amount; otherwise, it adds a new item with an amount of 1.
 * @param {string} name - The name of the menu item.
 * @param {number} price - The price of the menu item.
 */
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

/**
 * Removes an item from the cart.
 * @description This function decreases the amount of the item in the cart. If the amount reaches zero, it removes the item from the cart.
 * @param {string} name - The name of the menu item.
 * @param {number} price - The price of the menu item.
 */
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

/**
 * Clears the cart.
 * @description This function empties the cart and updates the cart display.
 */
function clearCart() {
  cart = [];
  renderCart();
  renderCartResponsive();
}

/**
 * Completes the order process.
 * @returns {boolean} Returns true if the cart is empty, false otherwise.
 * @description This function checks if the cart is empty. If it is, it does nothing; otherwise, it clears the cart and shows a thank you popup.
 */
function orderNow() {
  if (cart.length === 0) {
    return;
  }
  clearCart();
  showThanksPopup();
}

/**
 * Shows the cart popup.
 * @description This function displays the cart popup by setting its display style to 'flex'.
 */
function showCartPopup() {
  document.getElementById('cart-backdrop').style.display = 'flex';
}

/**
 * Hides the cart popup.
 * @description This function hides the cart popup by setting its display style to 'none'.
 */
function hideCartPopup() {
  document.getElementById('cart-backdrop').style.display = 'none';
}

/**
 * Shows the thank you popup.
 * @description This function displays the thank you popup by setting its display style to 'flex'.
 */
function showThanksPopup() {
  document.getElementById('thanks-popup').style.display = 'flex';
}

/**
 * Hides the thank you popup.
 * @description This function hides the thank you popup by setting its display style to 'none'.
 */
function hideThanksPopup() {
  document.getElementById('thanks-popup').style.display = 'none';
}

/**
 * Toggles the visibility of the burger menu.
 * @description This function toggles the display style of the burger menu between 'none' and 'flex'.
 */
function toggleBurgerMenu() {
  const menu = document.getElementById('burger-menu');
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'flex';
  } else {
    menu.style.display = 'none';
  }
}

/**
 * Updates the cart badge to show the number of items in the cart.
 * @description This function calculates the total number of items in the cart and updates the badge display
 */
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
