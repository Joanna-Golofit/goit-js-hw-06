const qs = (selector) => document.querySelector(selector);

let counterValue = 0;
const btnDecrement = qs('button[data-action="decrement"]');
const btnIncrement = qs('button[data-action="increment"]');
const textCounterValue = qs("span#value");

const increaseCounterValue = () => {
  counterValue += 1;
  textCounterValue.textContent = counterValue;
};

const decreaseCounterValue = () => {
  counterValue -= 1;
  textCounterValue.textContent = counterValue;
};

btnIncrement.addEventListener("click", increaseCounterValue);
btnDecrement.addEventListener("click", decreaseCounterValue);
