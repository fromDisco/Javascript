// BORROWING FROM PROTOTYPES 

// it it possible to borrow methods from one object
// to another.

let obj = {
    0: "Hello",
    1: "world!",
    length: 2,
};

let obj2 = {
    __proto__: obj,
    0: "Mensch",
    1: "Meyer!",
    length: 2,
}

console.log(obj);
obj.concat = Array.prototype.concat;

console.log(obj.concat(obj2)); // Hello,world!


// its even possible to assign a whole prototype to an object
Object.setPrototypeOf(obj, Array.prototype);
console.log(obj.splice(1));
