"use strict"

// __________________________
// Bound function as a method

function f() {
    console.log(this); // null
}

let user = {
    g: f.bind(null)
};

user.g();


// _________
// rebinding
function func() {
  console.log(this.name); // John
}

// rebinding isnt possible
func = func.bind( {name: "John"} ).bind( {name: "Pete"} );
func(); // John


// ___________________________________________
// binding a new property creates a new object
function sayHi() {
  console.log( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "John",
});

console.log( bound.test ); // undefined

console.log(Object.getOwnPropertyNames(sayHi)); // (4) ['length', 'name', 'prototype', 'test']

console.log(Object.getOwnPropertyNames(bound)); // (2) ['length', 'name']