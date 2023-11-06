const btech = fetch(`https://api.msigma.in/btech/v2/branches/`);
const query= document.querySelector(".Btech-cards-wrapper");
console.log(btech);
btech
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < 10; i = i + 2){
      let maindiv = document.createElement("div");
      maindiv.classList.add("maindiv")
      let couseName = data.branches[i].name;
      let div = document.createElement("div");
      div.classList.add("card")
      let h4 = document.createElement("h4");
      let p = document.createElement("p");
      let p1 = document.createElement("p");
      let button = document.createElement("button");
      button.textContent = "apply now"
      h4.textContent = data.branches[i].short;
      p.textContent = data.branches[i].name;
      div.appendChild(h4);
      div.appendChild(p);
      p1.textContent = "Fees Starting at ₹700 per Subject";
      div.appendChild(button);
      div.appendChild(p1);
      maindiv.appendChild(div);
      console.log(couseName);


      
      couseName = data.branches[i+1].name;
      let div1 = document.createElement("div");
      div1.classList.add("card")
       h4 = document.createElement("h4");
      p = document.createElement("p");
      p1 = document.createElement("p");
      p1.textContent = "Fees Starting at ₹700 per Subject"
      button = document.createElement("button");
      button.textContent="apply now"
      h4.textContent = data.branches[i+1].short;
      p.textContent = data.branches[i+1].name;
      div1.appendChild(h4);
      div1.appendChild(p);
      div1.appendChild(button)
      div1.appendChild(p1);
      maindiv.appendChild(div1);
      query.appendChild(maindiv);
      console.log(couseName);
    }
  });