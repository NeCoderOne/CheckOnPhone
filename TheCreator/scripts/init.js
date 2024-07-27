import { benefits } from "./benefits.js";
import { burger } from "./burger.js";
import { clientsSwiper } from "./clients.js";
import { deleteLoader, loader } from "./loader.js";
import { partnersSwiper } from "./partnersSwiper.js";
import { topSectionAnim } from "./topSection.js";
import { weDo } from "./weDo.js";
import { woman } from "./woman.js";

gsap.registerPlugin(ScrollTrigger);


window.addEventListener("load", () => {
  deleteLoader();
  partnersSwiper();
  clientsSwiper();
  burger();
  topSectionAnim();
  woman();
  weDo();
  benefits();
  loader();
});
