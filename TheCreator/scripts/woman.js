export function woman() {
  const path = document.querySelector(".woman-border path");
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
      trigger: ".woman",
      start: "top center",
    },
  });
  gsap.from(".woman__main-img", {
    opacity: 0,
    duration: 0.5,
    delay: 1.5,
    scrollTrigger: {
      trigger: ".woman",
      start: "top center",
    },
  });
  gsap.to(".woman__img-wrapper", {
    duration: 0.5,
    delay: 1,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    scrollTrigger: {
      trigger: ".woman",
      start: "top center",
    },
  });

  const icons = document.querySelectorAll(".woman__visual-icon");

  icons.forEach((icon, index) => {
    // icon = icon.getBoundingClientRect();
    // console.log(icon.right);
    gsap.from(icon, {
      "left": "50%",
      duration: 0.5,
      delay: 1.5,
      opacity: 0,
      scrollTrigger: {
        trigger: ".woman",
        start: "top center",
      },
    });
  });
}
