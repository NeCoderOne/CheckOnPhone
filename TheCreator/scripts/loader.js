export function loader() {
  const paths = document.querySelectorAll(".loader path");

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
  paths.forEach((path, index) => {
    let pathTotal = path.getTotalLength();
    path.style.strokeDashoffset = pathTotal;
    path.style.strokeDasharray = pathTotal;
    const dot = {
      transform: "matrix(1, 0, 0, 1, 0, 0)",
      duration: 0.25,
    };
    tl.to(
      path,
      index === 2
        ? dot
        : {
            duration: 1,
            onUpdate() {
              if (index !== 2) {
                let drawLength = pathTotal * this.progress();
                path.style.strokeDashoffset = pathTotal - drawLength;
              }
            },
          },
      index === 2 ? "label" : 0
    );
  });
}

export function deleteLoader() {
  const loaderIcon = document.querySelector(".loader__svg-wrapper");

  gsap.to(".loader__svg-wrapper", {
    scale: 0,
    duration: 0.5,
  });
  gsap.to(".loader", {
    clipPath: "polygon(100% 0, 100% 100%, 100% 100%, 125% 50%, 100% 0)",
    duration: 2,
    onComplete() {
      document.querySelector(".loader").remove();
    },
  });
}
