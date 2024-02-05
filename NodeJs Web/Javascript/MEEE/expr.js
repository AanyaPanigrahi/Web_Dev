let age = prompt ("Enter your age");
console.log(typeof(age))
age=Number.parseInt(age)
console.log(typeof(age))
if (age > 18) {
  console.log("You are eligible to vote");
} else {
  alert("You're under 18 and cant vote");
}

//if, if else, if else if else.

//switch case
let day = prompt("Enter the day"); //1-7
//day - string
//else change to number and use
switch(day){
    default:
      console.log("invalid input");
    break;
    case '1':
    console.log("Monday");
    break;
    case '2':
    console.log("Tuesday");
    break;
    case '3':
      console.log("Wednesday");
    break;
    case '4':
      console.log("Thursday");
    break;
    case '5':
      console.log("Friday");
    break;
    case '6':
      console.log("Saturday");
    break;
    case '7':
      console.log("Sunday");  
    break;
}