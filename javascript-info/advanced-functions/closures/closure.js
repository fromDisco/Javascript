// https://javascript.info/closure

// out is a global variable
// accessable from everywhere 
// if not called from inside a function
// where a local variable out is declared
let out = 1;

function f() {
  let value = 0;

  return function() {
    out++;
    value++;
    // console.log("outer: " + out);
    console.log("value: " + value);
  }
  
}

// this returns the inner function 
// of f() to variable g.
// if let g = f
// the whole function f would have been initialized to g
// let g = f() returns the result of f()
let g = f();
console.log(g);
                /* 
                ƒ () {
                    out++;
                    value++;
                    console.log("outer: " + out);
                    console.log("value: " + value);
                }
                */

g();
g();
let e = f();
e();
e();

g();
f()();
f()();


function func() {
  let value = Math.random();

  function g() {
    // console.log(value);
    debugger; // in console: type alert(value); No such variable!
  }

  return g;
}

let gf = func();
gf();
