let result = 0;
// const sum = (num1,num2) =>{
//   return num1+num2
// };

// const diff = (num1,num2) =>{
//   return num1-num2
// };


const handleInput =(handling )=>{
if(handling==`sum`){
 result = parseFloat(document.getElementById("num1").value)+parseFloat(document.getElementById("num2").value)
}
else{
  result = document.getElementById("num1").value-document.getElementById("num2").value

}
console.log(result);
return result;
}

document.getElementById("result").innerHTML= handleInput();