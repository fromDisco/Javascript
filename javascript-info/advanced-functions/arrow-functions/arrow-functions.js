// ARROW FUNCTIONS

// __________________________________
// arrow functions have no own "this"
// instead they are using this of its closure
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
        this.students.forEach(function (student) {
            // Error: Cannot read property 'title' of undefined
            console.log(this.title + ': ' + student);
            console.log(this); // logs window-object
        } /*, this */ ); // its possible to pass this as second argument
    },

    showArrowList() {
        this.students.forEach((student) => {
            // Error: Cannot read property 'title' of undefined
            console.log(this.title + ': ' + student);
            console.log(this); // logs the parent of showArrowList()
        });
    }
};

group.showList();
group.showArrowList();


// _______________________________________________
// arrow functions have no own "arguments"- object
// handy for passing arguments from a function to a forwarding call
// then "this" and "arguments" can be reached from an arrow-function

function deferArrow(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms);
    };
}

function sayHi(who) {
    console.log('Hello, ' + who);
}

let sayHiDeferred = deferArrow(sayHi, 2000);
sayHiDeferred("John"); // Hello, John after 2 seconds


// same with a normal function
function defer(f, ms) {
    return function (...args) {
        let ctx = this;
        setTimeout(function () {
            return f.apply(ctx, args);
        }, ms);
    };
}

let indirect = defer(sayHi, 3000);
indirect("Gerd");
