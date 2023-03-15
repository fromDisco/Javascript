// it is possible to call a method on a primitive
// like: let str = "Hello"; -> str.toUpperCase()
// ==>
// The string str is a primitive. So in the moment of accessing its property, a special object is created that knows the value of the string, and has useful methods, like toUpperCase().
// That method runs and returns a new string (shown by console.log).
// The special object is destroyed, leaving the primitive str alone.
let str = "Hello";

console.log( str.toUpperCase() ); // HELLO