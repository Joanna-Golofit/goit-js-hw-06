const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector("ul#ingredients");

ingredients.map(ingredient => {
  const li = document.createElement("li");
  li.setAttribute("class", "nature"); // najpierw setAttribute a potem classList dziala, bo inaczej nadpisuje klase
  li.classList.add("item");
  li.innerText = ingredient;
  console.log(li);
  ingredientsList.append(li);

});
//   console.log(...markup);
//   console.log(markup.join(""));

// ingredientsList.append(...markup);















// =========druga wersja


// const list = document.querySelector("#ingredients");

// ingredients.map(ingredient => {
//   const listItem = document.createElement("li");
//   listItem.textContent = ingredient;
//   listItem.classList.add("item");
//   console.log(listItem);
//   console.log(listItem.innerHTML);
//   console.log(typeof listItem);

//   // console.log([...listItem]);
//   // console.log(typeof [...listItem]);
//   list.append(listItem);
//   return listItem;
// });

