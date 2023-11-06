let countValue = new Promise((    ,reject) => {
reject("Promise rej");
});

countValue.finally(
  function greet(){
    console.log(`this code is executed.`);
  }
)