// A Set is a special type collection – 
// “set of values” (without keys), 
// WHERE EACH VALUE MAY OCCUR ONLY ONCE.

// _____________________
// Its main methods are:

// new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
console.log( set.size ); // 3

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}


// Set out of an array, remove duplicates
const arrDup = [
    "Erbse", 
    "Erbse",
    "Gurke",
    "Linse",
    "Erbse"
]

const setFromArr = new Set(arrDup);

console.log(arrDup); // (5) ['Erbse', 'Erbse', 'Gurke', 'Linse', 'Erbse']
console.log(setFromArr); // Set(3) {'Erbse', 'Gurke', 'Linse'}
console.log(setFromArr[1]); // 

let setIterate = new Set(["oranges", "apples", "bananas"]);

for (let value of setIterate) console.log(value);

// the same with forEach:
// first and second value return the same value. 
// this is for compability with Map and forEach, because Set has no index, 
setIterate.forEach((value, valueAgain, set) => {
  console.log(value);
});

console.log("setIterate.keys()"); 
console.log(setIterate.keys()); // SetIterator {'oranges', 'apples', 'bananas'}
console.log("setIterate.values()"); 
console.log(setIterate.values()); // SetIterator {'oranges', 'apples', 'bananas'}
console.log("setIterate.entries()"); 
console.log(setIterate.entries()); // SetIterator {'oranges' => 'oranges', 'apples' => 'apples', 'bananas' => 'bananas'}