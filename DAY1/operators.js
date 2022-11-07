/*Arithmetic Operators */
a=10,b=10;
console.log(a+b); //Addition
console.log(a-b); //Subtraction
console.log(a*b); //multiplication
console.log(a**b); //Exponentiation (for taking square)
console.log(a/b); //division
console.log(a%b); //modulus gives reminder
a++; // increment in a
console.log(a);
a--; //decrement in a
console.log(a); 

/*Assignment Operators */
// = is assignment operator same as x=y
c=10, d=10;
console.log(c+=d); //Addition assignment same as x=x+y
console.log(c-=d); //Subtraction assignment same as x=x-y
console.log(c*=d); //multiplication assignment same as x=x*y
console.log(c**=d); //Exponentiation assignment same as x=x**y
console.log(c/=d); //division assignment same as x=x/y
console.log(c%=d); //modulus assignment same as x=x%y 

/* Comparison Operators */ 
//in The in operator determines whether an object has a given property.
e=30, f=20, g=20; 
if(e>f){  // > greater than
    console.log("greater than")
}
if(f<e){ // < less than
    console.log("less than")
}
if(e>=f){ // >= greater than equals to
    console.log("greater than equals to")
} 
if(f<=e){ // <= less than equals to
    console.log("less than equals to")
}
if(f==g){ // == equals to
    console.log("equals to")
}
if(f===g){ // == equal value and equal type
    console.log("equal value and equal type")
}
if(e!=f){ // != equals to
    console.log("not equals to")
}
if(e!==f){ // !== equal value and equal type
    console.log("not equal value and not equal type")
}
/* Logical Operators */ 
h=10, i=15, j=10, k=3;
if(h==j && j==h){ // && logical and
    console.log("Both conditions is true so executed")
}
if(h==j || j==k){ // || logical or
    console.log("Atleast one of them is true so executed")
}
if(!(h==i)){ // ! logical not (reverse the condition)
    console.log("both are equal and ! reverse it")
}
/* Conditional Operator */ 
// ternory operator is known as conditional operator, it is act as if else
v=10, m=4;
v>m ? console.log("Maham") : console.log("fatima");
const age = 26;
const beverage = age >= 21 ? "apple" : "Juice";
console.log(beverage); // "apple"
/* typeof Operator */ 

//typeof - Returns the type of a variable
//instanceof - Returns true if an object is an instance of an object type. 
let z=30;
console.log(typeof z);

