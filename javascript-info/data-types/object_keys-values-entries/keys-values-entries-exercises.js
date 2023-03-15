// SUM THE PROPERTIES

// There is a salaries object with arbitrary number of salaries.
// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
// If salaries is empty, then the result must be 0.

function sumSalaries(obj) {
    let sumSal = 0;
    for (const val of Object.values(obj)) sumSal += val;

    return sumSal;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(sumSalaries(salaries)); // 650


// ________________
// COUNT PROPERTIES
// Write a function count(obj) that returns the number 
// of properties in the object:

// Try to make the code as short as possible.
// P.S. Ignore symbolic properties, count only “regular” ones.

function count(obj) {
    return Object.entries(obj).length;
}


let user = {
    name: 'John',
    age: 30
};

console.log(count(user)); // 2