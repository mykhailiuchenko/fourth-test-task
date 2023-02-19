const button = document.querySelector('.button');
const menu = document.querySelector('.menu');
const main = document.querySelector('.main');

function toggleMenu() {
  button.classList.toggle('button_active');
  main.classList.toggle('main_fixed');

  if (menu.classList.contains('menu_visible')) {
    menu.classList.remove('menu_visible');
    menu.classList.add('menu_hidden');
  } else {
    menu.classList.remove('menu_hidden');
    menu.classList.add('menu_visible');
  }
}

button.addEventListener('click', toggleMenu);
