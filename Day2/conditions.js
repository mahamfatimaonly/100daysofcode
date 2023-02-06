//if
let h=6;
if (h < 18) {
    console.log("Greatday");
}
//if else

if (h < 18) {
    console.log("Greatday");
}else{
    console.log("goodnight");
}
//if else if

if (h < 18) {
    console.log("Greatday");
}else if(h>18){
    console.log("goodday");
}else{
    console.log("goodnight");
}
//switch

switch (new Date().getDay()) {
    case 0:
      console.log("Sunday");
      break;
    case 1:
      console.log("Monday");
      break;
    case 2:
       console.log( "Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
      default:
        console.log("mil");
    
}
