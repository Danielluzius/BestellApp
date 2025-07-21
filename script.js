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

function 