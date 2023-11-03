// Timer

// setTimeout(() => {
//   console.log("after 2 seconds");
// }, 2000);

// setTimeout(() => {
//   console.log("after 3 seconds");
// }, 3000);

// Promise

// let promise = new Promise(function(resolve,reject){
//   // setTimeout(()=>resolve("done"),1000);
//   setTimeout(()=>reject(new Error("Some error!")),2000);
// });

// promise.then((result)=>console.log(result))
// .catch((error)=>console.log(error.message))

const request = fetch(`https://dummyjson.com/users/`); //request is a promise here fetch return a promise
console.log(request);

request
  .then((respose) => respose.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));
