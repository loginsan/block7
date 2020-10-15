import {$, $$} from './expands';

const aside = [$(".aside--main"), $(".aside--feedback"), $(".aside--callorder")];
const blank = $(".blank");
const btnOpenMenu = $(".oicon--menu");
const btnsClose = $$(".oicon--close");
const btnsCall = $$(".oicon--call");
const btnsChat = $$(".oicon--chat");
const body = $(".cps-page");

btnOpenMenu.addEventListener("click", function() {
  aside[0].classList.remove("aside--hidden");
  blank.classList.remove("hidden");
  body.classList.add("over-hidden");
});
for (let btn of btnsClose) {
  btn.addEventListener("click", function() {
    let parent = this.dataset.parent;
    blank.classList.add("hidden");
    body.classList.remove("over-hidden");
    if (parent === ".aside--main") {
      aside[0].classList.add("aside--hidden");
    } else {
      $(parent).classList.add("hidden");
    }
  });
}

const showModal = function(btn, modal) {
  return function() {
    if (btn.dataset.area === "aside") {
      aside[0].classList.add("aside--hidden");
    }
    modal.classList.remove("hidden");
    blank.classList.remove("hidden");
    body.classList.add("over-hidden");
    btn.blur();
  }
}
const btnsShowModal = function(btns, modal) {
  for (let btn of btns) {
    btn.addEventListener("click", showModal(btn, modal) );
  }
}
btnsShowModal(btnsCall, aside[2]);
btnsShowModal(btnsChat, aside[1]);

blank.addEventListener("click", function() {
  aside[0].classList.add("aside--hidden");
  aside[1].classList.add("hidden");
  aside[2].classList.add("hidden");
  blank.classList.add("hidden");
  body.classList.remove("over-hidden");
});