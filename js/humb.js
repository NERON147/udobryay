const popup = document.querySelector('#popup')
const menuIcon = document.querySelector('.menu-icon')
const menuWrapper = document.querySelector('.menu-icon-wrapper')
const navi = document.querySelector('#navi').cloneNode(1)



menuWrapper.addEventListener("click", hambHndler);

function hambHndler(e) {
  e.preventDefault();
  menuIcon.classList.toggle('menu-icon-active');
  popup.classList.toggle('open');
  document.body.classList.toggle('stop-scrolling');
};

