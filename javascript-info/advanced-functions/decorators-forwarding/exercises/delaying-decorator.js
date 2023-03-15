// DELAYING DECORATOR

// Create a decorator delay(f, ms) that delays 
// each call of f by ms milliseconds.

// In other words, delay(f, ms) returns a "delayed by ms" variant of f.

// In the code above, f is a function of a single argument, 
// but your solution should pass all arguments and the context this.

function func(x) {
    console.log(arguments.callee);
}

function delay(func, ms) {
    // funcArg();

    return function (...args) {
        console.log(args);
        setTimeout(() => {func.apply(this, arguments)}, ms);
    }
}

// create wrappers
let f1000 = delay(func, 1000);
let f1500 = delay(func, 2000);

f1000("test"); // shows "test" after 1000ms
f1500("test1"); // shows "test" after 1500ms


let bra = {
    size: "not to big",
    getThis() {
        return this;
    }
}

console.log(bra.getThis());
