// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

/* 

Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.

*/

function findOdd(array) {

    // gather all values in a map
    let counter = new Map();

    // count occurances of all values
    counter = array.reduce((acc, el) => {

        // every number is its own key
        if (acc.has(el)) {
            let val = acc.get(el); // value is the number of occurances
            acc.set(el, val + 1); // increase number
        } else {
            acc.set(el, 1);
        }

        return acc; // fill the mapp
    }, counter); // intitial value is empty "counter" Map()

    for (const num of counter) {
        if (num[1] % 2 !== 0) return num[0];
    }

    return counter;
}


function findOdd2(array) {

    // skip all duplicates
    let numberSet = [...new Set(array)];

    setLoop: for (const setVal of numberSet) {
        let index = 0;
        let counter = 0;

        while (index <= array.length) {

            if (array.indexOf(setVal, index) !== -1) {
                // on next iteration stat with indexOf + 1,
                // otherwise element will find itself
                index = array.indexOf(setVal, index) + 1;
                counter++;
            } else if (counter % 2 != 0) {
                // if counter is odd, then it is the searched setVal
                // stop everything and return setVal
                return setVal;
            } else {
                // if indexOf(setVal) is -1 there are no more occurances
                // so stop while loop and start with next "setLoop"
                continue setLoop;
            }

        }
    }
}


// ________________________________________________________
// solutions from codeWars

/* 

uses the bitwise XOR.
numbers are added, wenn added again it is substractet
010 ^ 010 = 000
if every number has an even count of occurances it is 0 in the end 

*/

const findOddCodeWarsShort = (xs) => xs.reduce((a, b) => a ^ b);


/* 

1. look if actual el of array is included in obj
    - if true, count up
    - if no, add element and set to 1

2. return the element with an uneven count
*/

function findOddCodeWarsLong(A) {
    var obj = {};

    A.forEach(function (el) {
        obj[el] ? obj[el]++ : obj[el] = 1;
    });

    for (prop in obj) {
        if (obj[prop] % 2 !== 0) return Number(prop);
    }
}



console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); //, 5);
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); //, -1);
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); //, 5);
console.log(findOdd([10])); //, 10);
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); //, 10);
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10])); //, 1);