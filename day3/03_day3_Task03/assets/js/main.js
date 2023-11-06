setTimeout(function(){myFunction("normal function");},3000);

function myFunction(value){
  document.getElementById("demo").innerHTML = value;
}


setTimeout (  ( )=> {myFunction("arrow function")},2000); 