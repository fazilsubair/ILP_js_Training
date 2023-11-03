for (let j = 1; j <= 5; j++) {
  let row = document.getElementById(`row${j}`);
  for (let i = 1; i <= 10; i++) {
    // document.getElementById("round").id = "round-active";
    const liItems = document.createElement("li");
    // liItems.id.add("list");
    liItems.classList.add("dot");
    row.appendChild(liItems);
  }
}
let highlighted = 0;
let incriment = () => {
  if (highlighted <= 4) {
    highlighted++;
    let row = document.getElementById(`row${highlighted}`);
    // div.classList.toggle("round-active");
    liItems = row.querySelectorAll(".dot");
    liItems.forEach((item) => item.classList.toggle(`active${highlighted}`));
    // console.log(liItems);
  }
};
let decrement = () => {
  if (highlighted > 0) {
    let row = document.getElementById(`row${highlighted}`);
    // div.classList.toggle("round-active");
    liItems = row.querySelectorAll(".dot");
    liItems.forEach((item) => item.classList.toggle(`active${highlighted}`));
    highlighted--;
    // console.log(liItems);
  }
};

// const liItems = document.createElement("li");
// liItems.id.add("list");
// temp.appendChild(liItems);
