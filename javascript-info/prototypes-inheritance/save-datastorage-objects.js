/* 
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

if object has user-provided object-keys, its a potential 
security risk.

Setting a property to __proto__ would get the prototype of
that object. 

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/


let obj = {};

let key = prompt("What's the key?", "__proto__");
obj[key] = "some value";

console.log(obj[key]); // [object Object], not "some value"!


// _______________________________________________
// :::::::::::::::::::::::::::::::::::::::::::::::
// Setting the prototype of storage Object to null 
// prevents accessing the prototype 

let objSecure = Object.create(null); // very plain Object

let keySecure = prompt("What's the key?", "__proto__");
objSecure[keySecure] = "some value";

console.log(objSecure[keySecure]); // "some value"
