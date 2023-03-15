// LOSING THIS

// ________________________
// wrapping into a function
let user = {
    firstName: "John",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
};


// context of "setTimeout" is window-object
// user.sayHi only passes sayHi()-method
// user.sayHi() 
setTimeout(user.sayHi(), 100); // Hello, undefined

setTimeout(function () {
    user.sayHi(); // Hello, John!
}, 300);


// ____________
// binding this
let user2 = {
    firstName: "Binder"
};

function func() {
    console.log(this.firstName);
}

let funcUser2 = func.bind(user2);
funcUser2(); // John


// ___________________________
// binding to an object method
let user3 = {
    firstName: "Legion",
    sayHi() {
        console.log(`Hello, ${this.firstName}!`);
    }
};

let sayHi = user3.sayHi.bind(user3); // (*)

// can run it without an object
sayHi(); // Hello, John!

setTimeout(sayHi, 1000); // Hello, Legion!

// even if the value of user3 changes within 1 second
// sayHi uses the pre-bound value which is reference to the old user3 object
user3 = {
    sayHi() {
        console.log("Another user in setTimeout!");
    }
};


// ___________________________
// Convenience method: bindAll
// If an object has many methods and we plan to actively pass it around, 
// then we could bind them all in a loop:
for (let key in user3) {
    if (typeof user3[key] == 'function') {
        user3[key] = user3[key].bind(user3);
    }
}


// _________________
// binding arguments
function mul(a, b) {
    console.log(a); // 2, if two is bind
    return a * b;
}

// substitutes the first x numbers of arguments
let double = mul.bind(null, 2, /*6*/); // bind requires "this", so here its null

console.log(double(3)); // = mul(2, 3) = 6
console.log(double(4)); // = mul(2, 4) = 8
console.log(double(5)); // = mul(2, 5) = 10