export function benefits() {
  const brushWrappers = document.querySelectorAll(
    ".benefits__img-brush-wrapper"
  );

  brushWrappers.forEach((brushWrapper, index) => {
    brushWrapper = brushWrapper.querySelectorAll(".benefits__img-brush");
    gsap.from(brushWrapper, {
      scaleX: 0,
      duration: 0.45,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".benefits",
        start: "top center",
      },
    });
  });

  const imgs = document.querySelectorAll(".benefits__img");

  imgs.forEach((img, index) => {
    gsap.from(img, {
      opacity: 0,
      duration: 0.35,
      delay: 2.1,
      scrollTrigger: {
        trigger: ".benefits",
        start: "top center",
      },
    });
  });
  const subImgs = document.querySelectorAll(".benefits__sub-img");

  subImgs.forEach((img, index) => {
    gsap.from(img, {
      opacity: 0,
      scale: 0,
      duration: 0.25,
      delay: 2.1,
      scrollTrigger: {
        trigger: ".benefits",
        start: "top center",
      },
    });
  });
}
