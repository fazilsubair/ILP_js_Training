const fruits = ["apple", "oranges", "grapes"];

fruitsList = document.getElementsByClassName("FruitList")[0];

fruits.forEach((fruit) => {
  const listItems = document.createElement("li");
  listItems.textContent = fruit;
  listItems.classList.add("fruit");
  fruitsList.appendChild(listItems);
});
