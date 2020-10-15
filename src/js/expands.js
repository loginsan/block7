export const $ = function(query) {
  return document.querySelector(query);
}
export const $$ = function(query) {
  return document.querySelectorAll(query);
}

// Expand Blocks
const expands = [
  {btn: $(".story__expand"), box: $(".story__body"), cname: "story__body", etext: "Читать далее"},
  {btn: $(".brands__expand"), box: $(".brands__pool"), cname: "brands__pool", etext: "Показать все"},
  {btn: $(".devices__expand"), box: $(".devices__pool"), cname: "devices__pool", etext: "Показать все"}
];
const clickExpand = function(exp) {
  for (let e of exp) {
    const bH = e.box.clientHeight;
    //console.log(bH);
    e.btn.addEventListener("click", function() {
      let reverse = e.btn.classList.contains("expand-button--reverse");
      let height = e.box.scrollHeight;
      e.box.style = (reverse)? `height: ${bH}px` : `height: ${height}px`;
      e.box.classList.toggle(e.cname + "--short");
      e.btn.classList.toggle("expand-button--reverse");
      e.btn.textContent = (reverse)? e.etext : "Скрыть";
    });
  }
}
clickExpand(expands);