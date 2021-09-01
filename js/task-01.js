const items = document.querySelectorAll(".item");
console.log('Number of categories: ', items.length);

for (let i = 0; i < items.length; i++) {
  const headings = items[i].querySelectorAll("h2");
  const listItems = items[i].querySelectorAll("ul li")
  console.log("Category: ", headings[0].innerText);
  console.log("Elements: ", listItems.length);
}
