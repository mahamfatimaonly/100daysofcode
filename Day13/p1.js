//Write a method that verifies an argument is a plain object, not an array or null

const isPlainObject = (element) => typeof element === 'object' 
&& !Array.isArray(element) && element !== null;
console.log(isPlainObject({maham:1})); //true
console.log(isPlainObject(1)); //false

//Write a method that returns a deep array like [[key, value]]
const makePairs = (object) => Object.entries(object);
console.log(makePairs({id:1,status:0}));

//check object is empty or not
const isEmpty = (object) => {
    const objectKeys = Object.keys(object);
    if (objectKeys.length === 0) {
      return true;
    }
  
    return !objectKeys.filter((key) => object[key] 
    || object[key] === 0 || object[key] === false).length;
};
console.log(isEmpty({id:1,status:0})); //false
console.log(isEmpty({})); //true

//compare two objects
const isEqual = (firstObj, secondObj) => {
    const firstObjKeys = Object.keys(firstObj);
    const secondObjKeys = Object.keys(secondObj);
  
    if (firstObjKeys.length !== secondObjKeys.length) {
      return false;
    }
  
    return !firstObjKeys.filter((key) => firstObj[key] 
    !== secondObj[key]).length;
};
console.log(isEqual({id:1},{id:1})); //true
console.log(isEqual({id:1},{id:2})); //false

//invoke an array into specific path
const invoke = (object, path, func, args) => {
    const splittedPath = path.split('.');
  
    const target = splittedPath.reduce((acc, key) => { //Expected Result: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]
      acc = acc[key] ? acc[key] : object[key];
      return acc;
    }, {});
  
    return Array.prototype[func].apply(target, args);
};

console.log(invoke( { a: { b: [1, 2, 3] } }))
//intersection of two objects

const intersection = (firstObj, secondObj) => {
    const firstObjKeys = Object.keys(firstObj);
  
    return firstObjKeys.reduce((acc = {}, key) => {
      if (firstObj[key] === secondObj[key]) {
        acc = {
          ...acc,
          [key]: firstObj[key],
        };
      }
  
      return acc;
    }, {});
};
console.log(intersection({id:1},{id:1})) //{id:1}