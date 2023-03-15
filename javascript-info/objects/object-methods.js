"use strict"

let user = {
    name: "John",
    age: 30
};

// a function expression assigned to a property
// is called a method!
user.sayHi = function () {
    console.log("Hi!");
};
user.sayHi(); // "Hi!"

// its also possible to use a pre-declared function as a method
function sayGoodBye() {
    console.log("Goodbye!");
}
user.sayGoodBye = sayGoodBye;
user.sayGoodBye(); // "Goodbye!"


// method shorthand
// these objects do the same
let userLonghand = {
    sayHi: function () {
        console.log("Hello");
    }
};

let userShorthand = {
    sayHi() { // same as "sayHi: function(){...}"
        console.log("Hello");
    }
};


// _______________________________
// THIS
let userThis = {
    name: "John"
};
let admin = {
    name: "Admin"
};

function sayHi() {
    console.log(this.name);
}

// use the same function in two objects
userThis.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
userThis.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

// Arrow functions are special: they don’t have their “own” this. 
// If we reference this from such a function, it’s taken from the outer “normal” function.
let userArrow = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};

userArrow.sayHi(); // Ilya


// the following this does not work, because this is called as a function,
// not as a method. The this in the function is not related to the object
// this doesnt look at the object definition. Only the moment of call matters
function makeUser() {
    return {
        name: "John",
        ref: this,
    };
}
let userTask = makeUser();
// console.log(userTask.ref.name); // Error

// this is how it works
// the value of this is calculated when the method is called
function makeUser2() {
    return {
        name: "John",
        ref() {
            return this;
        }
    };
}
let userMethod = makeUser2();

console.log(userMethod.ref().name); // John


// _________________________________
// calculator
let calculator = {
    read: readNumbers,
    sum() {
        return this.num1 + this.num2
    },
    mul() {
        return this.num1 * this.num2
    },
}

function readNumbers() {
    this.num1 = 2,
    this.num2 = 4;
}


// ______________________________
// chaining
let ladder = {
    step: 0,
    up() {
        this.step++;
        console.log(this);
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { // shows the current step
        console.log(this.step);
        return this;
    }
};