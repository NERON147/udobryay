const swiper = new Swiper('.swiper', {

  centeredSlides: true,
  speed: 600,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
    grabCursor: true,
    slidesPerView: "3",
    initialSlide: 1,
    autoplay : {
      delay: 5000,
      disableOnInteraction: false,
    },
    
    loop: true,
    breakpoints: {
      1000: {
        slidesPerView: 3,
        
      },
      700: {
        slidesPerView: 2,
        
      },
      640: {
        slidesPerView: 1,
        
      },
      320: {
        slidesPerView: 1,
        
      }
    },
  
  });

  
  ScrollReveal().reveal('.n1', {  distance: '60px', origin: 'left', delay: 300, easing: 'ease'});
  ScrollReveal().reveal('.n2', {  distance: '60px', origin: 'left', delay: 400, easing: 'ease'});
  ScrollReveal().reveal('.n3', {  distance: '60px', origin: 'left', delay: 500, easing: 'ease'});
  ScrollReveal().reveal('.n4', {  distance: '60px', origin: 'left', delay: 600, easing: 'ease'});
  ScrollReveal().reveal('.n5', {  distance: '60px', origin: 'left', delay: 700, easing: 'ease'});
  ScrollReveal().reveal('.i', {  distance: '60px', origin: 'right', delay: 1000, easing: 'ease'});
  ScrollReveal().reveal('.i1', {  distance: '60px', origin: 'right', delay: 1100, easing: 'ease'});
  ScrollReveal().reveal('.tel', {  distance: '60px', origin: 'right', delay: 1300, easing: 'ease'});
  ScrollReveal().reveal('.logo2', {  distance: '60px', origin: 'top',  rotate: {
    x: 200,
    y: 0,
    z: 100,
}, delay: 900,  easing: 'ease' });
  ScrollReveal().reveal('.shop', {  distance: '60px', origin: 'left',  delay: 1500 , easing: 'ease'});
  ScrollReveal().reveal('.shop__text', {  distance: '60px', origin: 'left',  delay: 1700 , easing: 'ease'});
  ScrollReveal().reveal('.buy3', {  distance: '60px', origin: 'right', delay: 1900, easing: 'ease',
  rotate: {
    x: 1000,
    y: 50,
    z: 50,
}});
ScrollReveal().reveal('.bgr', {  distance: '200px', origin: 'bottom',  delay: 1200, easing: 'ease',});
ScrollReveal().reveal('.main__text2', {  distance: '60px', origin: 'bottom',  delay: 700, easing: 'ease' });
ScrollReveal().reveal('.katalog2', {  distance: '60px', origin: 'left',delay: 900, easing: 'ease-in'});
ScrollReveal().reveal('.about__text2', {  distance: '60px', origin: 'right', delay: 900, easing: 'ease-in'});
ScrollReveal().reveal('.smotry2', {  distance: '60px', origin: 'top', delay: 800, easing: 'ease'});
ScrollReveal().reveal('.slider2', {  distance: '60px', origin: 'bottom', delay: 1100, easing: 'ease'});
ScrollReveal().reveal('.left__cont2', {  distance: '60px', origin: 'left', delay: 1100, easing: 'ease'});
// ScrollReveal().reveal('.right__cont2', {  distance: '60px', origin: 'right', delay: 1800, easing: 'ease'});
ScrollReveal().reveal('.onas', {  distance: '60px', origin: 'right', delay: 1000, easing: 'ease'});
ScrollReveal().reveal('.gazel', {  distance: '60px', origin: 'right', delay: 1000, easing: 'ease'});

ScrollReveal().reveal('.ogorod', {  distance: '60px', origin: 'left', delay: 1100, easing: 'ease'});
ScrollReveal().reveal('.buy4', {  distance: '60px', origin: 'right', delay: 1900, easing: 'ease',
rotate: {
  x: 100,
  y: 0,
  z: 100,
}});
ScrollReveal().reveal('.trava', {  distance: '60px', origin: 'bottom', delay: 1000, easing: 'ease-in'});
ScrollReveal().reveal('.form__buy4', {  distance: '60px', origin: 'bottom', delay: 1400, easing: 'ease'});
ScrollReveal().reveal('.logo--footer', {  distance: '60px', origin: 'bottom', delay: 400});
ScrollReveal().reveal('.footer__left2', {  distance: '60px', origin: 'left', delay: 1100, easing: 'ease'});
ScrollReveal().reveal('.card10', {  distance: '160px', origin: 'left', delay: 900, easing: 'ease', desktop: false,
rotate: {
  x: 10,
  y: 0,
  z: -10,
}});
ScrollReveal().reveal('.card11', {  distance: '160px', origin: 'right', delay: 1100, easing: 'ease', desktop: false,
rotate: {
  x: 10,
  y: 0,
  z: 10,
}});
ScrollReveal().reveal('.card111', {  distance: '160px', origin: 'left', delay: 900, easing: 'ease', mobile: false,
rotate: {
  x: 10,
  y: 0,
  z: -10,
}});
ScrollReveal().reveal('.card112', {  distance: '160px', origin: 'bottom', delay: 1100, easing: 'ease', mobile: false });
ScrollReveal().reveal('.card113', {  distance: '160px', origin: 'right', delay: 1300, easing: 'ease', mobile: false,
rotate: {
  x: 10,
  y: 0,
  z: 10,
}});

ScrollReveal().reveal('.card__fix', {  distance: '300px', origin: 'bottom', delay: 1700, easing: 'ease'});

ScrollReveal().reveal('.menu-icon-wrapper', {  distance: '100px', origin: 'left', delay: 1800, easing: 'ease'});
ScrollReveal().reveal('.kozina__img', {  distance: '100px', origin: 'right', delay: 3800, easing: 'ease'});
ScrollReveal().reveal('.setchik', {  distance: '100px', origin: 'right', delay: 3800, easing: 'ease'});

var cleave = new Cleave('.tel', {
  phone: true,
  phoneRegionCode: 'RU',
  delimiter: '-',
});





