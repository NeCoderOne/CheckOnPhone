let clientsSwiper = new Swiper(".clients__swiper", {
  navigation: {
    nextEl: ".clients__swiper-btn-right",
    prevEl: ".clients__swiper-btn-left",
  },
  simulateTouch: true,
  slidesPerView: 1.1,
  spaceBetween: 15,
  breakpoints: {
    // when window width is >= 320px
    700: {
      slidesPerView: 2.5,
      spaceBetween: 32,
    },
  },
  //   centeredSlides: true,
  //   initialSlide: 1,
  //   centeredSlidesBounds: true,
});
