// MAP FROM OBJECT
let obj = {
  name: "John",
  age: 30,
  length: 2
};


// returns an array of string-keyed key-value pairs
console.log(Object.entries(obj));

// create a new Map from an object
let map = new Map(Object.entries(obj));

console.log(map);
console.log(map.get("name")); // "John"