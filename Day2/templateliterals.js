//Template literals use back-ticks (``) to define a string

let a=`maham`;
console.log(a);

// Template literals allows multiline strings:

let text =`greedy fox is
actually not greedy`;
console.log(text);

// String Interpolation
//Template literals provide an easy way to interpolate variables and expressions into strings.

let fruit="apple";
console.log(`my favorite fruit is: ${fruit}`);

// variable Substitutions
let firstName = "maham";
let lastName = "fatima";

let t = `Welcome ${firstName}, ${lastName}!`;

console.log(t);

//Expression Substitution
let u=10;
let no=8;
let total=`${u}`*`${no}`;
console.log(total);
