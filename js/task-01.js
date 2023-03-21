// const categoriesList = document.querySelector("#categories");
// const categoriesItems = categoriesList.querySelectorAll(".item");

// console.log(`Number of categories: ${categoriesItems.length}`);

// categoriesItems.forEach((item) => {
//   const categoryName = item.querySelector("h2").textContent;
//   const categoryItems = item.querySelectorAll("li");
//   console.log(
//     `Category: ${categoryName}. Number of Elements: ${categoryItems.length}.`
//   );
// });


const listItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${listItem.length}`);


listItem.forEach( (item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`)
  console.log(`Elements: ${item.lastElementChild.children.length}`)
});