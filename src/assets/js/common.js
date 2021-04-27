import eachElm from './eachElm';

export default function() {
  const globalHeader = document.getElementById('globalHeader');
  const globalHeaderBtn = document.getElementById('globalHeader-menuBtn');
  const menu = document.getElementById('menu');
  const menuItem = menu.querySelectorAll('.menu-item');
  const menuItemCharge = menu.querySelector('.menu-charge');
  const menuItemCross = menu.querySelector('.innerCross');

  const openClass = 'is-open';

  function menuBodyToggle() {
    globalHeaderBtn.addEventListener('click', event => {
      if (menu.classList.contains(openClass)) {
        globalHeaderBtn.classList.remove(openClass);
        menu.classList.remove(openClass);
      } else {
        globalHeaderBtn.classList.add(openClass);
        menu.classList.add(openClass);
      }
    });
  }

  function menuChildToggle() {
    menuItemCross.addEventListener('click', event => {
      if (menuItemCharge.classList.contains(openClass)) {
        menuItemCharge.classList.remove(openClass);
      } else {
        menuItemCharge.classList.add(openClass);
      }
    });
  }

  menuBodyToggle();
  menuChildToggle();
}