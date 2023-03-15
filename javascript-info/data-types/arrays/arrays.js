// SLOW METHODS
// shift(), unshift() 
/* 
both Methods modify the beginning of the array.
Because Array-Properties are ordered and work best this way
without empty fields, etc. 
--> if modifiying the beginning of the array by deleting or adding
the whole array has to be renumbered


// for...in loop
this loop is for objects
it is possible to use it on arrays,
but it is slow an give unwantend results
*/

// loops for arrays
let arr = ["Apple", "Orange", "Pear"];

// classical for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// for in gives access to the value but not the index
for (let key in arr) {
    console.log(arr[key]); // Apple, Orange, Pear
}


// .length property
// isn't calculated, instead it is index of the last item plus one
// it is possible to is writable. 
// if we decrease the length, the array is truncated.
let arr2 = [1, 2, 3, 4, 5];

arr2.length = 2; // truncate to 2 elements
console.log( arr ); // [1, 2]

arr2.length = 5; // return length back
console.log( arr[3] ); // undefined: the values do not return


// fast way to clear an array
arr2.length = 0;

// Arrays as objects. 
// the variable holding the array is only a reference to the array-object
console.log( [] == [] ); // false
console.log( [0] == [0] ); // false


/* 
Sum input numbers
importance: 4
Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero. 
*/
function sumInputs() {

    let isNumeric = true;
    let inputArr = [];
    const isNumRegEx = /^\d+/;

    do {
        let userInput = prompt("Ich geh dir aufn Sack");
        if (isNumRegEx.test(userInput)) {
            inputArr.push(+userInput);
        } else {
            isNumeric = false;
        }
    } while (isNumeric === true);

    return inputArr.reduce( (prev, curr) => prev += curr);

}

console.log(sumInputs());