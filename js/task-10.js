import { dqs } from "./funkcje.js";

const boxes = dqs("#boxes");
const btnCreate = dqs("[data-create]");
const btnDestroy = dqs("[data-destroy]");
const input = dqs("input");
console.log(boxes);
console.log(btnCreate);
console.log(btnDestroy);
console.log(input);

let size = 30;

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const createBoxes = () => {
  const amount = input.value;

  console.log(amount);
  for (let i = 1; i <= amount; i++) {
    const box = `<div class="box" style='background: ${getRandomHexColor()}; width:${size}px; height:${size}px '> ${i}  </div>`;
    size += 10;
    console.log(size);
    boxes.innerHTML += box;
  }
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
  size = 30;
};
btnCreate.addEventListener("click", createBoxes);

btnDestroy.addEventListener("click", destroyBoxes);
