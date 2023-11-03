// calculator using switch

let num1 = Number(prompt("enter first number"));
let num2 = Number(prompt("enter second number"));
let choice = prompt("your operation + - / *");
let ans;

switch (choice) {
  case "+":
    ans = num1 + num2;
    break;
  case "-":
    ans = num1 - num2;
    break;
  case "/":
    ans = num1 / num2;
    break;
  case "*":
    ans = num1 * num2;
    break;
}

console.log(ans);
