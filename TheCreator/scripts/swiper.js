window.addEventListener("DOMContentLoaded", () => {
  let swiper = new Swiper(".partnersSwiper", {
    slidesPerView: 2,
    spaceBetween: 32,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    simulateTouch: false,
  });
});
