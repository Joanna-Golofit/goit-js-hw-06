const items = document.querySelectorAll(".item");
console.log('Number of categories: ', items.length);

for (let i = 0; i < items.length; i++) {
  const headings = items[i].querySelectorAll("h2");
  const listItems = items[i].querySelectorAll("ul li")
  console.log("Category: ", headings[0].innerText);
  console.log("Elements: ", listItems.length);
}

// inne wersje tego samego:

// //wersja 1
// const categories = document.querySelector("ul#categories");
// console.log("Number of categories: " + categories.childElementCount);

// //wersja 2
// const categories2 = document.querySelectorAll("li.item");
// console.log("Number of categories2: " + categories2.length);

// //wersja 3
// console.log(
//   "Number of categories3: " + document.querySelectorAll("li.item").length
// );

// categories2.forEach(c => {
//   console.log("Category:", c.firstElementChild.innerHTML);
//   console.log(`Elements: ${c.querySelectorAll("li").length}`);
// })


