export function topSectionAnim() {
  let paths = document.querySelectorAll(".top-content path");

  paths.forEach((path, index) => {
    let pathTotal = path.getTotalLength();
    path.style.strokeDashoffset = pathTotal;
    path.style.strokeDasharray = pathTotal;
    const anim = gsap.to(path, {
      duration: 1,
      delay: index === 2 ? 0.5 : 0,
      onUpdate() {
        let drawLength = pathTotal * this.progress();
        path.style.strokeDashoffset = pathTotal - drawLength;
      },
      scrollTrigger: {
        trigger: ".top-content",
        start: "top center",
      },
    });
  });

  let icons = document.querySelectorAll(".visual-part__img");

  icons.forEach((icon, index) => {
    gsap.from(icon, {
      scale: 0,
      opacity: 0,
      duration: 0.35,
      scrollTrigger: {
        trigger: ".top-content",
        start: "top center",
      },
    });
  });
  let hands = document.querySelectorAll(".visual-part__hand");

  hands.forEach((hand, index) => {
    gsap.from(hand, {
      x: index === 1 ? "100%" : "-100%",
      duration: 0.35,
      scrollTrigger: {
        trigger: ".top-content",
        start: "top center",
      },
    });
  });
}
