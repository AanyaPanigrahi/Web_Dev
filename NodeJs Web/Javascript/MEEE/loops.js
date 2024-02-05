//for loop
console.log("for loop")
for(let i=1;i<6;i++){
  console.log(i)
}

let studentclass={
  "Aanya":8,
  "Adii":9,
  "Chikkad":7
}

//for in loop
console.log("\nfor in loop")
for(let a in studentclass){
  console.log(a); //prints keys
  console.log(studentclass[a]); //prints values
}

//for of loop
console.log("\nFor of loop")
for(let b of "Aanya"){
  console.log(b); //prints values of the string
}

//while loop
console.log("\nWhile loop")
var a=1;
while(a<6){
  console.log(a);
  a++;
}

console.log("\nDo while loop")
//do while
do{
  console.log(a);
  a++;
}while(a<11);