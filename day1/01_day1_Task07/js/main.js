// fin if office is closed using  || operator
let hour = 14;
let weekend = false;

let time = prompt("enter time");

if (time < 9 || time > 20) {
  console.log("office closed");
}
