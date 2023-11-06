let testArray = [20,10,2,-42,2323,34];
// let resultArry= [ ];

function testing(result, callback){
  console.log("testing function is working")
  resultArry =result.filter(callback);
  // callback(resultArry);
  return resultArry;
}




const checkIsNegative =(x)=>{

  return x>=0;
  
}

testing(testArray,checkIsNegative);
console.log(resultArry);