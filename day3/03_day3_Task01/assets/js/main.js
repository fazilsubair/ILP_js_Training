function greet(name, callback){
  console.log(`hi`+ ` `+ name);
  callback();
}

function alpha(){
  console.log(`I am the alpha function `);
  
}

function beta(){
  console.log(`I am the beta function `);

}
greet("fazil",alpha);
greet("fazil",beta);
