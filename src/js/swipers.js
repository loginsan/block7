import Swiper, {Pagination} from 'swiper';
Swiper.use([Pagination]);

//(function() {
//  "use strict";
  const breakp = window.matchMedia( "(min-width:33.75em)" );
  let swipers = [];
  const swiperPag = [
    document.querySelector(".brands__bullets"),
    document.querySelector(".devices__bullets"),
    document.querySelector(".prices__bullets")
  ];

  const swiperTpl = function(paginationEl) {
    return {
      a11y: true,
      slidesPerView: "auto",
      spaceBetween: 16,
      pagination: {
        el: paginationEl,
        clickable: true
      }
    }
  }
  const enableSwiper = function() {
    swipers[0] = new Swiper(".brands__pool", swiperTpl(".brands__bullets"));
    swipers[1] = new Swiper(".devices__pool", swiperTpl(".devices__bullets"));
    swipers[2] = new Swiper(".prices__pool", swiperTpl(".prices__bullets"));
  };
  const destroySwiper = function(swipersArray) {
    for (let s of swipersArray) {
      s.destroy(true, true);
    }
  }
  const showBullets = function(pagiArray) {
    for (let p of pagiArray) {
      p.classList.remove("hidden");
    }
  }
  const hideBullets = function(pagiArray) {
    for (let p of pagiArray) {
      p.classList.add("hidden");
    }
  }

  const breakpChecker = function() {
    if (breakp.matches === true) {
      if (swipers[0] !== undefined) {
        hideBullets(swiperPag);
        destroySwiper(swipers);
      }
      return;
    } // else
    showBullets(swiperPag);
    return enableSwiper();
  };
  breakp.addListener(breakpChecker);
  breakpChecker();
//})();
