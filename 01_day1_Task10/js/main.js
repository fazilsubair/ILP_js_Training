

// star with random no b/w 1 to 100
// if number is even div it by 2
// else multiply it by 3  and + 1
// stop if it reaches 1


i = Math.floor(Math.random() * 100) + 1;

do {
  if(i%2==0){
    i=i/2;
  }
  else{
    i=i*3;
    i++
  }
  console.log(i);
}
while(i!=1)