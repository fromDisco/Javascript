// Translate border-left-width to borderLeftWidth
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// That is: removes all dashes, each word after dash becomes uppercased.

function camelize(params) {
    const words = params.split("-");

    for (let i = 1; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join("");

}

console.log(camelize("background-color")); // == 'backgroundColor';
console.log(camelize("list-style-image")); // == 'listStyleImage';
console.log(camelize("-webkit-transition")); // == 'WebkitTransition';


// __________________________________________
// Filter range
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.

function filterRange(arr, min, max) {
    return arr.filter(val => val >= min && val <= max);
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4); // 3,1 (matching values)
console.log(filtered);


// _________________________________
// FILTER RANGE "IN PLACE"
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.

function filterRangeInPlace(arr, min, max) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min || arr[i] > max) {
            arr.splice(i, 1);
            i--;
        }
    }
}

let arrToFilter = [5, 3, 5, 8, 9, 1];
filterRangeInPlace(arrToFilter, 1, 4); // removed the numbers except from 1 to 4

console.log(arrToFilter); // [3, 1]


// __________________________________________
// SORT IN DECREASING ORDER
let arrSort = [5, 2, 1, -10, 8];
arrSort.sort( (a, b) => b - a);

console.log( arrSort ); // 8, 5, 2, 1, -10


// ______________________________________
// COPY AND SORT ARRAY
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.

let arrSortAndCopy = ["HTML", "JavaScript", "CSS"];

function copySorted(arrSortAndCopy) {
    return arrSortAndCopy.slice().sort();
    
}

let sorted = copySorted(arrSortAndCopy);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arrSortAndCopy ); // HTML, JavaScript, CSS (no changes)

