// _______________________________________________________________
// ITERABLES ARE OBJECTS THAT IMPLEMENT THE SYMBOL.ITERATOR METHOD

// ARRAY-LIKES ARE OBJECTS THAT HAVE INDEXES AND LENGTH, SO THEY LOOK LIKE ARRAYS.
// 

// strings are both: iterable and array-like
let string = "Hello";

// iterable
for (const iterator of string) {
    console.log(iterator); // H, e, l, l, o
}

// array-like
console.log(string.length); // 5


// _______________________________________
// iterables and array-likes don't feature 
// .push(), .pop(), ...
// Array.from() takes an iterable or array-like 
// creates a real array
let arrayLike = {
    0: "Hello",
    1: "World",
    3: "Wrong", // isn't shown, because length is 3
    length: 3
};

let arr = Array.from(arrayLike); // (*)
console.log(arr);
console.log(arr.pop()); // undefined, because arrayLike.length is 3, index 3 is undefined


// Array from takes an optional second argument, 
// that can be a function, that is applied to every value 
// before adding to the array 
let numbersStr = "12345";
let numbersSplit = numbersStr.split("");
let numbersArr = Array.from(numbersStr, num => num * num);
console.log(numbersArr);
console.log(numbersSplit);


// MAKE (A) NUMBER(S) ITERABLE
Number.prototype[Symbol.iterator] = function () {
    let current = this;
    return {
        next: () => {
            if (current) {
                let value = current % 10;
                current = parseInt(current / 10);
                return {value, done: false};
            } else {
                return {done: true};
            }
        }
    }
}

for (let i of 12345) {
    console.log(i)
}