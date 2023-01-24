//Display Date and time

let today = new Date();
  let day = today.getDay();
  let daylist = ["Sunday","Monday","Tuesday",
  "Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day]);
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand===' PM ') 
  { if (minute===0 && second===0){ 
  hour=12;
  prepand=' Noon';
  } else { 
  hour=12;
  prepand=' PM'; } } 
  if (hour===0 && prepand===' AM ')  { 
  if (minute===0 && second===0) { 
  hour=12;
  prepand=' Midnight'; } 
  else{ 
  hour=12;g
  prepand=' AM';} 
} 
console.log(" The Time is : "+hour + prepand + " : "
 + minute + " Minutes and " + second + " Seconds");
