// Rest

const number = [1, 2, 3, 4, 5];

// const sum = (args) => {
//   console.log(args);

//   console.log(typeof args);
// };
// sum(number);

// const sum = (args) => {
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     sum += arg[i];
//   }
//   console.log(sum);
// };

// sum(number);

//  maps

const sum1 = (args) => {
  let sum = 0;
  args.map((element) => (sum += element));
  console.log(sum);
};
sum1(number);



const sum2 = (args) => {
  let sum = 0;
  args.forEach((element)=>sum+=element);
  console.log(sum);
};
sum2(number);
