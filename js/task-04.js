const qs = (selector) => document.querySelector(selector);

const counter = qs("div#counter");
const value = qs("span#value");

const update = (e) => {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }  
  e.target.dataset.action === "increment" ? increase() : decrease();
};

const increase = () => value.innerHTML++;

const decrease = () => value.innerHTML--;

//delegowanie zdarzen - do wspólnego przodka dodawany jest jeden handler, zamiast dodawania handlera do każdego elementu
counter.addEventListener("click", update);








// =======================================================second version switch case
// const counter = qs("div#counter");
// const value = qs("span#value");

// const update = (e) => {
//   if (e.target.nodeName !== "BUTTON") {
//     return;
//   }
//   
//   switch (e.target.dataset.action) {
//     case "increment":
//       increase();
//       break;
//     case "decrement":
//       decrease();
//       break;
//   }
// };

// const increase = () => value.innerHTML++;

// const decrease = () => value.innerHTML--;

// //delegowanie zdarzen - do wspólnego przodka dodawany jest jeden handler, zamiast dodawania handlera do każdego elementu
// counter.addEventListener("click", update);







//============================================================= first version with 2 addeEventListeners

// let counterValue = 0;
// const btnDecrement = qs('button[data-action="decrement"]');
// const btnIncrement = qs('button[data-action="increment"]');
// const textCounterValue = qs("span#value");

// const increaseCounterValue = () => {
//   counterValue += 1;
//   textCounterValue.textContent = counterValue;
// };

// const decreaseCounterValue = () => {
//   counterValue -= 1;
//   textCounterValue.textContent = counterValue;
// };

// btnIncrement.addEventListener("click", increaseCounterValue);
// btnDecrement.addEventListener("click", decreaseCounterValue);
