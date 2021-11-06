const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const update = (e) => {
  nameOutput.innerHTML = e.target.value;
  if (!e.target.value) {
        nameOutput.innerHTML = "Anonymous";
  }
}

nameInput.addEventListener("input", update)







// wersja 2:

// const update = () => {
//   nameOutput.innerHTML = nameInput.value;
//   if (!nameInput.value) {
//     nameOutput.innerHTML = "Anonymous";
//   }
// };

// nameInput.addEventListener("input", update);




//================== pierwsza wersja
// const nameInput = document.querySelector("#name-input");
// const nameOutput = document.querySelector("#name-output");

// nameInput.addEventListener("input", (event) => {
//   nameOutput.textContent = event.currentTarget.value;
//   // console.log(event.currentTarget.value);
//   if (event.currentTarget.value === "") {
//     nameOutput.textContent = "Anonymous";
//    }
// });

