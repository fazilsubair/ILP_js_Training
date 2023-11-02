
// name
// ||

let firstname = "aron";
let secondname = "wafg";
let nickname ="hjg";

let activename = firstname || secondname||nickname||"Anon";

console.log(activename);

// &&


activename = firstname && secondname&&nickname&&"Anon";

console.log(activename);



console.log(!0); //true
