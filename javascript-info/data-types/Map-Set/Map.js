// Map is a collection of keyed data items, just like an Object. 
// But the main difference is that Map allows keys of any type.

// ___________________________
// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the value by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.


// objects convert keys into strings
// MAP ALLOWS STRINGS AND NUMBERS AND EVEN OBJECTS AS KEYS

let map = new Map();
let person = {
    name: "michel",
    age: 43
};

map.set('1', 'str1'); // a string key
map.set(1, 'num1'); // a numeric key
map.set(true, 'bool1'); // a boolean key
map.set(person, 123) // object as key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log(map); // 'num1'
console.log(map.get(1)); // 'num1'
console.log(map.get('1')); // 'str1'
console.log(map.get(true)); // 'str1'
console.log(map.get(person)); // 123

console.log(map.size); // 3


// ________________________
// CHAINING MAP methods

let map2 = new Map();

// Every map.set call returns the map itself, so we can “chain” the calls:
map2.set('1', 'str1')
    .set(1, 'num1')
    .set(true, 'bool1');