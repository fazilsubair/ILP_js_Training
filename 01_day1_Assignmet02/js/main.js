//loop from 1 to 20
// if current number == evern , continue
// if number divisibel by3, display number is divisible by 3 in console
// if number divisibel by 5, display number is divisible by 5 in console
// if number divisibel by both 3 and 5 exit


for(let  i=1;i<=20;i++){
  if(i%3==0 && i%5==0 ){
    // break;
  }
  else if(i%3==0){
    console.log(`the number ${i} is divisble by 3`);
  }
  else if (i%5==0){
    console.log(`the number ${i} is divisble by 5`);

  }
}