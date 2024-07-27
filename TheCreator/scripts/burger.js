export function burger() {
  const burger = document.querySelector(".header__burger-btn");
  const burgerSection = document.querySelector(".burger-nav");
  const navBtns = document.querySelectorAll(".burger-nav__list-link");
  const joinBtn = document.querySelector(".burger-nav__btn");
  const btns = [burger, ...navBtns, joinBtn];
  // console.log(btns);
  btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      burgerSection.classList.toggle("active");
    });
  });
}
