import {$, $$} from './expands';

const siteNav = {
  links: $$(".sitenav__link"),
  elem: $(".sitenav"),
  active: "sitenav__link--active"
};
const clickSiteNav = function(nav){
  for (let link of nav.links) {
    link.addEventListener("click", function(evt) {
      this.blur();
      evt.preventDefault();
      if (!this.classList.contains(nav.active)) {
        let activeLink = nav.elem.querySelector("." + nav.active);
        activeLink.classList.remove(nav.active);
        this.classList.add(nav.active);
      }
    });
  }
}
clickSiteNav(siteNav);