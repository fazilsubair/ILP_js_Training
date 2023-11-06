
let promise =  new Promise(function (resolve,reject){
  setTimeout(function(){
    resolve(`promise resolved`)
  },4000);
})

async function asyncFunc() {
  try{
    let result = await promise;
  console.log(result);
  console.log(`helo`);
  }
  
  catch(error){
    console.log(error)
  }
}

asyncFunc();