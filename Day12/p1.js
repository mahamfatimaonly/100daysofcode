let num1 = window.prompt("Input the First integer");
let num2 = window.prompt("Input the second integer", );                                                 
if(parseInt(num1) > parseInt(num2)) 
// The parseInt method parses a value as a string and returns the first integer
  { 
  console.log("In "+ num1+ " and "+ num2+ " the larger number is "+ num1+ ".");
  }   
else
  if(parseInt(num2) > parseInt(num1)) 
  {
  console.log("In "+ num1+ " and "+ num2+ " the larger number is "+ num2+ ".");
  }                  
else
  {
   console.log("The values "+ num1+ " and "+num2+ " are equal.");
  } 
 // sort numbers 
let array=[1,4,6,3,2,7,5,6];
console.log("Actual Array", array)
for(let arr of array){
    array.sort();
}

console.log("Sorted Array" ,array);

let items=prompt("Enter ingredient name to check stock");

switch (items) {
    case 'eggs':
      console.log("Available");
      break;
    case 'bread':
      console.log("Available");
      break;
    case 'sugar':
       console.log( "Available");
      break;
    case 'milk':
      console.log("Available");
      break;
    case 'jam':
      console.log("Available");
      break;
    case 'peanutbutter':
      console.log("Available");
      break;
    case 'butter':
      console.log("Available");
      break;
      default:
        console.log("not found, go for grocery");
}

names=['maham','fatima']
let Value=prompt("Enter name to find");
for (let index in names) {
    if (names[index] === Value) {
        console.log("Name is found at index", index);
        break;
    }
}

let numbers = [65, 99, 34, 12, 10, 77];
    for(number of numbers){ 
        if(number % 5 == 0){ 
          console.log(number + " is divisible by 5.")
        }
        else{
          continue; 
          console.log(number + " is not divisible by 5.") 
        }
    }

let weekdays=0;
weekday: //label
for(let day = 1; day <= 31; day++) {        
    checkDay = day % 7;
    if (checkDay == 0) 
      continue weekday; 
    else
    weekdays++; 
    }
console.log(" you've to work for "+ weekdays +" days to earn"); */

const number = parseInt(prompt('Enter an integer: '));
for(let i = 1; i <= 10; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}

// program to find Armstrong number between intervals

// take an input
const lowNumber = parseInt(prompt('Enter a positive low integer value: '));
const highNumber = parseInt(prompt('Enter a positive high integer value: '));
console.log ('Armstrong Numbers:');
for (let i = lowNumber; i <= highNumber; i++) {
    let numberOfDigits = i.toString().length;
    let sum = 0;
    let temp = i;
    while (temp > 0) {
        let remainder = temp % 10;
        sum += remainder ** numberOfDigits;
        temp = parseInt(temp / 10); 
    }
    if (sum == i) {
        console.log(i);
    }
}