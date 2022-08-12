const swiper = new Swiper('.swiper', {
  
  speed: 300,
    spaceBetween: 100,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "3",
    initialSlide: 1,
    autoplay : {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 600,
    loop: true,
  });

  
  ScrollReveal().reveal('.n1', {  distance: '60px', origin: 'left', delay: 300, easing: 'ease'});
  ScrollReveal().reveal('.n2', {  distance: '60px', origin: 'left', delay: 400, easing: 'ease'});
  ScrollReveal().reveal('.n3', {  distance: '60px', origin: 'left', delay: 500, easing: 'ease'});
  ScrollReveal().reveal('.n4', {  distance: '60px', origin: 'left', delay: 600, easing: 'ease'});
  ScrollReveal().reveal('.n5', {  distance: '60px', origin: 'left', delay: 700, easing: 'ease'});
  ScrollReveal().reveal('.logo2', {  distance: '60px', origin: 'top',  rotate: {
    x: 200,
    y: 0,
    z: 100,
}, delay: 500,  easing: 'ease' });
  ScrollReveal().reveal('.img2', {  distance: '60px', origin: 'right',  delay: 300});
  ScrollReveal().reveal('.form__buy3', {  distance: '60px', origin: 'left',  delay: 500 });
  ScrollReveal().reveal('.buy3', {  distance: '60px', origin: 'right', delay: 1000,
  rotate: {
    x: 100,
    y: 0,
    z: 100,
}});
ScrollReveal().reveal('.main__text2', {  distance: '60px', origin: 'bottom',  delay: 700, easing: 'ease' });
ScrollReveal().reveal('.katalog2', {  distance: '60px', origin: 'left',delay: 400});
ScrollReveal().reveal('.about__text2', {  distance: '60px', origin: 'right', delay: 400});
ScrollReveal().reveal('.smotry2', {  distance: '60px', origin: 'top', delay: 800});
ScrollReveal().reveal('.slider2', {  distance: '60px', origin: 'bottom', delay: 1100});
ScrollReveal().reveal('.left__cont2', {  distance: '60px', origin: 'left', delay: 1100});
ScrollReveal().reveal('.right__cont2', {  distance: '60px', origin: 'right', delay: 1400});

ScrollReveal().reveal('.form__buy4', {  distance: '60px', origin: 'bottom', delay: 400});
ScrollReveal().reveal('.logo--footer', {  distance: '60px', origin: 'bottom', delay: 400});