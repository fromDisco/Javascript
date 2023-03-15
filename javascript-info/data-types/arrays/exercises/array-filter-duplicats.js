// FILTER UNIQUE ARRAY MEMBERS
// Let arr be an array.
// Create a function unique(arr) that should return an array 
// with unique items of arr.

function unique(arr) {
    const unique = [];

    arr.filter( el => {
        if (!unique.includes(el)) {
            unique.push(el)
        }
    });

    return unique;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings)); // Hare, Krishna, :-O