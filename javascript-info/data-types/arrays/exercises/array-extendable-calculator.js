
// ___________________________________
// Create an extendable calculator
// Create a constructor function Calculator that creates “extendable” calculator objects.

// 1. The task consists of two parts.
// First, implement the method calculate(str) that takes 
// a string like "1 + 2" in the format 
// “NUMBER operator NUMBER” (space-delimited) and returns the result. 
// Should understand plus + and minus -.

// 2. Then add the method addMethod(name, func) that teaches the calculator 
// a new operation. It takes the operator name and the two-argument 
// function func(a,b) that implements it.
// For instance, let’s add the multiplication *, division / and power **:

// - No parentheses or complex expressions in this task.
// - The numbers and the operator are delimited with exactly one space.
// - There may be error handling if you’d like to add it.


function Calculator() {
    this.value = 0; // initial Value
    
    this["method-"] = (a, b) => a - b;
    this["method+"] = (a, b) => a + b;
    this.addMethod = (name, func) => this["method" + name] = func;
    
    /* 
    // alternate way of defining methods
    // called by this.methods["+"]
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    }; 
    */

    this.getThis = this;
    
    this.calculate = function (string) {
        
        calcStr = string.split(" ");

        // checks if operator is already a method
        // if not, automaticly create a new method
        if (!this.hasOwnProperty("method" + calcStr[1])) {

            // a, b are given. build function body "funcStr" for new method
            let funcStr = `return a ${calcStr[1]} b`;
            // https://javascript.info/new-function
            this["method" + calcStr[1]] = new Function( 'a', 'b', funcStr );
            
        }

        // set first value of string to this.value
        // so this.value can be reused in iterating calculations, 
        // that have multiple operations e.g -> (a + b) + c
        this.value = +calcStr[0];

        // can take multiple operations. 
        while (calcStr.length >= 2) {

            let calcMethod = this["method" + calcStr[1]];
            // always only calculates the first tow values of arr
            this.value = calcMethod(+this.value, +calcStr[2]);
            // then substitute those two values with their result
            calcStr.splice(0, 3, this.value);
            // repeat process until string.length is <=2

        }

        return this.value;
    }
}

let calc = new Calculator;
// let result = calc.calculate("3 + 7 + 5 - 9"); // 6

// add methods
calc.addMethod("/", (a, b) => a / b);
// calc.addMethod("**", (a, b) => a ** b);
calc.addMethod("*", (a, b) =>  a * b );

// console.log(calc.getThis);
let result = calc.calculate("2 ** 4");
// result = calc.calculate("2 ** 5");

// console.log(calc.calculate("2 * 4"));
console.log( result ); // 8

