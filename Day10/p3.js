// reverse the string characters

string_reverse = (str) => { 

    return str.split("").reverse().join("");
}
console.log(string_reverse("mahamfatimaonly"));


//covert given number into hours and min

function time_convert(number)
 { 
  const hours = Math.floor(number / 60);  
  const minutes = number % 60;
  return `${hours}:${minutes}`;         
}

console.log(time_convert(90));

//Check whether two given integers are similar or not with divisor

function checking_numbers(x, y, divisor) {
    if(x % divisor === 0 && y % divisor === 0 
        || x % divisor !== 0 && y % divisor !==
      0) {
      return true;
    }
    return false;
  }
  
  console.log(checking_numbers(2, 10, 5))
  console.log(checking_numbers(2, 10, 5))
  console.log(checking_numbers(2, 10, 4))
  
// first letter in uppercase
function uppercase(string)
{
  let array = string.split(' ');
  let newarray = [];
    
  for(let x = 0; x < array.length; x++){
      newarray.push(array[x].charAt(0).toUpperCase()
      +array[x].slice(1));
  }
  return newarray.join(' ');
}
console.log(uppercase("maham fatima"));
  // binary search

function array_binarySearch(array, element) {
  let position = Math.floor(array.length / 2);
  if (array[position] === element){
    return position; 
  }
  else if (array.length === 1) 
  {
    return null;
  }
  else if (array[position] < element) {
    let arr = array.slice(position + 1);
    let res = array_binarySearch(arr, element);
    if (res === null)
    {
      return null;
    }
    else {
      return position + 1 + res;
    }
  }
  else {
   let arr = array.slice(0, position);
   return array_binarySearch(arr, element); 
  }
}
let myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14,
  15, 17, 19, 20, 22, 23];
console.log(array_binarySearch(myArray, 7));

//Write a JavaScript function that generates all combinations of a string.
function substrings(string)
{
let array = [];
  for (let x = 0, y=1; x < string.length; x++,y++) 
  {
   array[x]=string.substring(x, y);
  }
let combi = [];
let temp= "";
let length = Math.pow(2, array.length);

for (let i = 0; i < length; i++)
{
  temp= "";
  for (let j=0;j<array.length;j++) {
   if ((i & Math.pow(2,j))){ 
      temp += array[j];
    } }
    if (temp !== "")
    {
      combi.push(temp);
    }
}
  console.log(combi.join("\n"));
}

substrings("maham");

//Detect JavaScript Data Types
function detect_data_type(value){
let dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;  
if (typeof value === "object" || typeof value === "function") 
  {
   for (x = 0, len = dtypes.length; x < len; x++) 
   {
    if (value instanceof dtypes[x]){
      return dtypes[x];
    }
  }
  }
  return typeof value;
}
console.log(detect_data_type('maham'));
console.log(detect_data_type(false));
console.log(detect_data_type(9));

