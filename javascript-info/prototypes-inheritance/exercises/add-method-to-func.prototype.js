/* 
::::::::::::::::::::::::::::::::::::::::::::

ADD METHOD "F.DEFER(MS)" TO FUNCTIONS

Add to the prototype of all functions the method defer(ms), 
that runs the function after ms milliseconds.
::::::::::::::::::::::::::::::::::::::::::::
*/


Function.prototype.defer = function (arg) {
    setTimeout(this, arg);
};

function f() {
    console.log("Hello!");
}

// f.defer(1000); // shows "Hello!" after 1 second



/* 
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

ADD THE DECORATING "DEFER()" TO FUNCTIONS

Add to the prototype of all functions the method defer(ms), 
that returns a wrapper, delaying the call by ms milliseconds.
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/


Function.prototype.defer2 = function (delay) {
    const func = this;

    return function (...args) {
        console.log(args);
        setTimeout( () => func.apply(this, args), delay);
    }
}


// function f2(a, b) {
//     console.log(a + b);
// }

// f2.defer2(1000)(1, 32); // shows 3 after 1 

let user = {
  name: "John",
  sayHi(a, b) {
      console.log(arguments)
    console.log(this.name);
    console.log(a + b);
  }
}

user.sayHi = user.sayHi.defer2(1000);

user.sayHi(1, 3);
