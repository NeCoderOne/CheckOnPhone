


export function partnersSwiper() {
  let swiper = new Swiper(".partnersSwiper", {
    slidesPerView: 2,
    spaceBetween: 32,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    simulateTouch: false,
  });


  const paths = document.querySelectorAll(".partners path");

  paths.forEach((path, index) =>{
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
        trigger: ".partners",
        start: "top center",
      }
    });
  })
}
