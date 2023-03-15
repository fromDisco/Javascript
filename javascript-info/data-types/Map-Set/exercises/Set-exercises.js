// FILTER UNIQUE ARRAY MEMBERS

// Let arr be an array.
// Create a function unique(arr) that should return an 
// array with unique items of arr.

function unique(arr) {
    // return [...new Set(arr)];
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values)); // Hare, Krishna, :-O


// FILTER ANAGRAMS
// Anagrams are words that have the same number of same letters, but in different order.
// Write a function aclean(arr) that returns an array cleaned from anagrams.

function aclean(arr) {

    const mapWithAna = new Map();

    for (const val of arr) {
        
        let actVal = val.toLowerCase();
        
        // to compare the words, sort the chars
        actVal = [...actVal].sort( ( prev, val) => val.localeCompare(prev)).join("");
        
        // sorted chars as keys. Where keys are the same, value is overwritten
        mapWithAna.set(actVal, val);

    }

    // get array of map-values und join them, to get a string
    let mapVals = Array.from(mapWithAna.values()).join(", ");
    return mapVals;

}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"


// _________________
// ITERABLE KEYS
// We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.


let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());
keys.push("more");
console.log(keys); // (2) ['name', 'more']

// shorthand, using spread-operator
let keysSpread = [...map.keys(), "more"];
console.log(keysSpread); // (2) ['name', 'more']