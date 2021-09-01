const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

ingredients.map(ingredient => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  console.log(listItem);
  console.log(listItem.innerHTML);
  console.log(typeof listItem);

  // console.log([...listItem]);
  // console.log(typeof [...listItem]);
  list.append(listItem);
  return listItem;
});

