export function weDo() {
  const paths = document.querySelectorAll(".we-do path");

  paths.forEach((path, index) => {
    let pathTotal = path.getTotalLength();
    path.style.strokeDashoffset = pathTotal;
    path.style.strokeDasharray = pathTotal;
    const anim = gsap.to(path, {
      duration: 1,
      delay: index === 1 ? 0.5 : 0,
      onUpdate() {
        let drawLength = pathTotal * this.progress();
        path.style.strokeDashoffset = pathTotal - drawLength;
      },
      scrollTrigger: {
        trigger: ".we-do",
        start: "top center",
      },
    });
  });

  const imgs = document.querySelectorAll("img.we-do__visual-img");

  imgs.forEach((img, index) => {
    gsap.from(img, {
      x: index > 1 ? 500 : -500,
      duration: 0.75,
      scrollTrigger: {
        trigger: ".we-do",
        start: "top center",
      },
    });
  });
}
