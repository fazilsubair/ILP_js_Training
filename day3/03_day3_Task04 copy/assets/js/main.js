let countValue = new Promise((resolve,  )=>{
  resolve("Promise resolved");
});

const v1 = (res)=>{
  console.log(res);
}
const v2 = () => {
  console.log("you can call multiple functions this way ");

}

countValue
  .then(v1)
  .then(v2);