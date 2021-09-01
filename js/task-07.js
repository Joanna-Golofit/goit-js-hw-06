const qs = (selector) => document.querySelector(selector);
// const log = (message) => console.log(message);

const range = qs("input#font-size-control");
const text = qs("span#text");



range.addEventListener("click", () => {
  text.style.fontSize = `${range.value}px`;
});




