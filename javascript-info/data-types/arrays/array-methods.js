// CONCAT
// f an array-like object has a special Symbol.isConcatSpreadable property, 
// then it’s treated as an array by concat: its elements are added instead:
let arr = [1, 2];

let arrayLike = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2
};

console.log(arr.concat(arrayLike)); // 1,2,something,else



// INDEXOF, LASTINDEXOF, INCLUDES
// these methods use strict comparison ===
let arr2 = [1, 0, false];

console.log(arr2.indexOf(0)); // 1
console.log(arr2.indexOf(false)); // 2
console.log(arr2.indexOf(null)); // -1
console.log(arr2.includes(1)); // true


const arr3 = [NaN];
console.log(arr3.indexOf(NaN)); // -1 (should be 0, but === equality doesn't work for NaN)
console.log(arr3.includes(NaN)); // true (correct)



let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};

let users = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
];

// find users, for who army.canJoin returns true.
// second argument "army" is thisArg. Without, this=undefined
let soldiers = users.filter(army.canJoin, army);

// allternative way of handling this when calling army.canJoin
let soldiers2 = users.filter( user => army.canJoin(user));

console.log(soldiers.length); // 2
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23