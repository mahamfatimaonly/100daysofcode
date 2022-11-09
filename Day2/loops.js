// for loop
for (let i = 0; i < 5; i++) {
    console.log("The number is " + i);
}

// for of
const fruits =['a','b','c'];
for(let fruit of fruits){ //fruit is as singular of plural fruits
    console.log(fruits);
}
//for in (gives index)
for(let index in fruits){  // we can use any name in the place of index
    console.log(index);
}

//while
j=0;
while (j < 10) {
    console.log("The number is " + j);
    j++;
}
//do while
k=0;
do {
    console.log("The number is " +k);
    k++;
  }
  while (k < 10);