// ASYNC AWAIT 
// code that run in parallel


// async function myFunction(params1,params2){
//   //  asynch code here
// }const myFunction = async (params1,params2)=>{
// // your asynch code here 
// }

async function fn(){
  console.log(`async function.`);
  return 1;
}
fn().then(v1).then(v2).catch(handleError);