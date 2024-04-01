const categoriesList = document.getElementById("categories");
const items = categoriesList.querySelectorAll(".item");

console.log(`Total categories: ${items.length}`);

items.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryItems = item.querySelectorAll("li").length;
  console.log(`Category: ${categoryName} - ${categoryItems} items`);
});
