const nav = document.querySelector('nav');
// const menuitems = document.querySelectorAll('nav a');
const icons = document.querySelector('.nav-icons');
const close = document.querySelector('.nav-img-cancel');
const open = document.querySelector('.nav-img');

function mobileMenuItems() {
  if (nav.classList.contains('showMenu')) {
    nav.classList.remove('showMenu');
    close.style.display = 'none';
    open.style.display = 'block';
  } else {
    nav.classList.add('showMenu');
    close.style.display = 'block';
    open.style.display = 'none';
  }
}

icons.addEventListener('click', mobileMenuItems);