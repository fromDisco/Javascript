// its possible to write long numbers in shorter syntax
1e3 === 1 * 1000;
1.23e6 === 1.23 * 1000000;

// or smaller than 1
1e-3 === 1/1000;

// not to be confused with ne object.prototype.toString()
// ist number.prototype.toString(base)
// the base represents the numeral system to wich the number should be converted
// base = 2 -> binary System
// base = 16 -> hexadezimal System
// default is 10
let num = 255;

console.log(num.toString(2)); // 11111111
console.log(num.toString(16)); // ff

// its possible to call that method directly on a number
// by typing two dots after the number
console.log(123456..toString(16));
// it looks like a typo, but typing just one dot would result in an error
// js would imply the decimal part after the first dot

// to round a number to the 2nd digit after decimal it is possible to 
// multiply the number by 100 (or a bigger power of 10), call the rounding method of Math and devide by 100
let num = 1.23456;
console.log( Math.round(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

// the method toFixed(n) returns the number to n digits, but gives back a string
let num = 12.34;
console.log( num.toFixed(1) ); // "12.3"
// so 
console.log( +num.toFixed(1) ); // 12.3 -> unary plus converts the result to a number

// check if some value is a number
console.log( isNaN(NaN) ); // true
console.log( isNaN("str") ); // true

// its not possible to compare a value to NaN with "... === NaN"
console.log( NaN === NaN ); // false


let num = +prompt("Enter a number", '');
// will be true unless you enter Infinity, -Infinity or not a number
console.log( isFinite(num) );

// to check if two values are exactly the same Object.is(a, b) is used
// it compares like === but 
Object.is(NaN, NaN) === true;
Object.is(0, -0) === false;


// it is not possible to convert "12px" to a number using the unary plus or Number()
// here "parseInt" and "parseFloat" join the game
console.log( parseInt('100px') ); // 100
console.log( parseFloat('12.5em') ); // 12.5

console.log( parseInt('12.3') ); // 12, only the integer part is returned
console.log( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

console.log( parseInt('a123') ); // NaN, the first symbol stops the process

// The parseInt() function has an optional second parameter. 
// It specifies the base of the numeral system, 
// so parseInt can also parse strings of hex numbers, binary numbers and so on:
console.log( parseInt('0xff', 16) ); // 255
console.log( parseInt('ff', 16) ); // 255, without 0x also works

console.log( parseInt('2n9c', 36) ); // 123456