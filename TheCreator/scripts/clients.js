export function clientsSwiper() {
  let clientsSwiper = new Swiper(".clients__swiper", {
    navigation: {
      nextEl: ".clients__swiper-btn-right",
      prevEl: ".clients__swiper-btn-left",
    },
    simulateTouch: true,
    slidesPerView: 1.1,
    spaceBetween: 15,
    breakpoints: {
      700: {
        slidesPerView: 2.5,
        spaceBetween: 32,
      },
    },
  });

  const paths = document.querySelectorAll(".clients path");

  paths.forEach((path, index) => {
    let pathTotal = path.getTotalLength();
    path.style.strokeDashoffset = pathTotal;
    path.style.strokeDasharray = pathTotal;
    const anim = gsap.to(path, {
      duration: 1,
      onUpdate() {
        let drawLength = pathTotal * this.progress();
        path.style.strokeDashoffset = pathTotal - drawLength;
      },
      scrollTrigger: {
        trigger: ".clients",
        start: "top center",
      },
    });
  });
}
