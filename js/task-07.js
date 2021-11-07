const qs = (selector) => document.querySelector(selector);

const range = qs("#font-size-control");
const text = qs("span#text");

const changeFontSize = (e) => {
  console.log(`${e.target.value}px`);
  text.style.fontSize = `${e.target.value}px`;
};

range.addEventListener("click", changeFontSize);








// =============== druga wersja

// const range = document.querySelector("#font-size-control");
// const text = document.querySelector("span#text");

// range.addEventListener("click", (e) => {
//   console.log(e.target.value);  
//   text.style.fontSize = `${e.target.value}px`;
// });







// =============== pierwsza wersja
// const qs = (selector) => document.querySelector(selector);
// // const log = (message) => console.log(message);

// const range = qs("input#font-size-control");
// const text = qs("span#text");



// range.addEventListener("click", () => {
//   text.style.fontSize = `${range.value}px`;
// });




