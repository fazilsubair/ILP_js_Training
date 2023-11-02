
//global , lcal, block scopes

let a = 10;
console.log(0);
const fun = () => {
  let a = 11;
  if (true) {
    let a = 12;
    console.log(a);
  }
  console.log(a);
};
fun();




//Hosid : blck -> loacl ->global