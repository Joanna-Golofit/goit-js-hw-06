function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const button = document.querySelector("button");
const span = document.querySelector("span");

const changeBgColor = () => {
  const color = getRandomHexColor()
  span.innerHTML = color;
  body.style.backgroundColor = color;
};


button.addEventListener("click", changeBgColor);