const popup = document.querySelector('#popup')
const menuIcon = document.querySelector('.menu-icon')
const menuWrapper = document.querySelector('.menu-icon-wrapper')
const navi = document.querySelector('.pop__menu')



menuWrapper.addEventListener("click", hambHndler);

function hambHndler(e) {
  e.preventDefault();
  menuIcon.classList.toggle('menu-icon-active');
  popup.classList.toggle('open');
  document.body.classList.toggle('stop-scrolling');
};

navi.addEventListener('click', closeMenu)

function closeMenu() {
  popup.classList.remove('open');
  document.body.classList.toggle('stop-scrolling');
  menuIcon.classList.remove('menu-icon-active');
}

