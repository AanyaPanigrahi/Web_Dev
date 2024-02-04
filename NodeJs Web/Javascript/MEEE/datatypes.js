//nn bb ss u primitive datatype
let a = null;
let b = 345;
let c = true;
let d = BigInt("567") + BigInt("3");
let e = "Aanya";
let f = Symbol("I am a nice symbol");
let g = undefined;
console.log(a, b, c, d, e, f, g);
console.log(typeof d);

//objects - non primitive
const item = {
  "Aanya": true,
  Bye: false,
  Hey: 67,
  Hi: undefined,
};
console.log(item["Aanya"]);
console.log(item["Hey"]);
console.log(item["xyz"]);

let x = 10;
let y = 'hey';
console.log(x+y);
console.log(typeof(x+y));

const a1 ={
  name: "adya",
  section: 4
}
//a1=45 error when redeclared
//can add keys
a1['rollnum']=45;
console.log(a1)