"use strict"
// every object property has its own porperty attributes (flags)

/* 

- writable – if true, the value can be changed, otherwise it’s read-only.
- enumerable – if true, then listed in loops, otherwise not listed.
- configurable – if true, the property can be deleted and these attributes 
  can be modified, otherwise not.

*/

let kindergarden = {
    uname: "JavaKid",
}

let descriptor = Object.getOwnPropertyDescriptor(kindergarden, "uname");
console.log(descriptor);

/* 
configurable: true
enumerable: true
value: "JavaKid"
writable: true 
*/


// ___________________
// edit property flags
let user = {
    name: "John"
};

Object.defineProperty(user, "name", {
    writable: false
});

// or build the whole property from scratch

// _________
// writable
Object.defineProperty(user, "nickname", {
    value: "jerk",
    // for new properties we need to explicitly list what's true
    enumerable: true,
    configurable: true,
    // writable: true 
});

// user.nickname = "Pete"; // Uncaught TypeError: Cannot assign to read only ...


// __________
// enumerable
// adding new properties makes them numberable
// so they show up in loops
let userEnum = {
    name: "John",
    toString() {
        return this.name;
    }
};

// By default, both our properties are listed:
for (let key in userEnum) console.log(key); // name, toString

Object.defineProperty(userEnum, "toString", { enumerable: false })

for (let key in userEnum) console.log(key); // name

// doesnt list in propterties either
console.log(Object.keys(userEnum)); // ["name"]


// ____________
// configurable
let userConfig = {
  name: "John"
};


userConfig.name = "Pete"; // works fine
// delete userConfig.name; // Error

Object.defineProperty(userConfig, "name", {
  configurable: false
});

// its possible to change a positive value to negative
// but not the other way around
Object.defineProperty(userConfig, "name", {
  writable: false
});


console.log(Object.getOwnPropertyDescriptors(userConfig, "name"));

/* 
Object.defineProperty(userConfig, "name", {
  configurable: true
}); // Uncaught TypeError: Cannot redefine property: name 
*/


// _____________________________________
// cloning an object including its flags
// To get all property descriptors at once, we can use the method Object.
// getOwnPropertyDescriptors(obj).

// Together with Object.defineProperties it can be used as a “flags-aware” 
// way of cloning an object:

// Object.getOwnPropertyDescriptors returns all property descriptors 
// including symbolic and non-enumerable ones.

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(userConfig));

console.log(clone);


// _____________________________________________
// Sealing objects. Prevent changing values etc.

let obj = {};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions

Object.preventExtensions(obj)
// Forbids the addition of new properties to the object.


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal

Object.seal(obj);
// Forbids adding/removing of properties. Sets configurable: 
// false for all existing properties.


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

Object.freeze(obj);
// Forbids adding/removing/changing of properties. 
// Sets configurable: false, writable: false for all existing properties.


