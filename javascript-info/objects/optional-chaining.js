"use strict";

let user = {
    name: "Michel",
    lastName: "Holzky",
    address: {
        village: "Lind",
    }
}

console.log(user.name); // Michel
console.log(user.address.street); // undefined
// console.log(user.hobby.sport); // Uncaught TypeError: Cannot read properties of undefined

// accessing a property of undefined throws an error.
// but if, eg. the user didn't provide an address, we dont want an error, instead we want 
// to get "undefined".
// how to achive this:
console.log(user.address && user.address.street && user.address.street.name); // undefined (no error)

// but this is cumbersome and repetative
// "?." makes the the value before it optinal. So you dont geht an error 
// when requesting a value of "undefined"
console.log(user.hobby?.sport); // undefined -> hobby?. is optional

// dont use this:
console.log(user?.hobby?.sport); // if user is undefined something different is wrong


// "?.()" can be used to call an optional function
let userAdmin = {
    admin() {
        console.log("I am admin");
    }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // nothing (no such method)


// its also possible to use "?." with delete
delete user?.name; // deletes user.name if user exists