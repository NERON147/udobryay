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