//get a random item from an array.
const random_item=(items)=>items[Math.floor(Math.random()*items.length)];
let items = [54, 45, 21, 36, 23];
console.log(random_item(items));
// move element
function move(arr, old_index, new_index) {
    while (old_index < 0) {
        old_index += arr.length;
    }
    while (new_index < 0) {
        new_index += arr.length;
    }
    if (new_index >= arr.length) {
        let k = new_index - arr.length;
        while ((k--) + 1) {
            arr.push(undefined);
        }
    }
     arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);  
   return arr;
} 
let array=[10, 20, 30, 40, 50];
console.log(move(array, 0, 2));
//merge two arrays and removes repetation
function merge_array(array1, array2) {
    const result_array = [];
    const arr = array1.concat(array2);
    let length = arr.length;
    const arr2 = {};

    while(length--) {
        const item = arr[length];

        if(!arr2[item]) 
        { 
            result_array.unshift(item);
            arr2[item] = true;
        }
    }
    return result_array;
}
const array1 = [1, 2, 3, 5];
const array2 = [2, 6, 7, 9];
console.log(merge_array(array1, array2));  


function search(arr, number) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
            return i;
        }
    }
    return false;
}
let arr = [1, 2, 4, 6, 7, 9];
console.log(search(arr, 6));

