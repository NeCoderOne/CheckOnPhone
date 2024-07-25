let clientsSwiper = new Swiper(".clients__swiper", {
  navigation: {
    nextEl: ".clients__swiper-btn-right",
    prevEl: ".clients__swiper-btn-left",
  },
  simulateTouch: true,
  slidesPerView: 1.5,
  spaceBetween: 20,
  breakpoints: {
    // when window width is >= 320px
    500: {
      slidesPerView: 2.5,
      spaceBetween: 32,
    },
  },
  //   centeredSlides: true,
  //   initialSlide: 1,
  //   centeredSlidesBounds: true,
});
