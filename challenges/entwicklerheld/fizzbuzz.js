// FIZZBUZZ

// 1. Fizzbuzz function returns a number.
// Given is a number which is not divisible by 3 or 5.
// When the function called with this number.
// Then the function should return the invoked number.

// Scenario 2: Fizzbuzz function returns "fizz".
// Given is a number which is divisible by 3.
// When the function called with this number.
// Then the function should return "fizz".

// Scenario 3: Fizzbuzz function returns "buzz".
// Given is a number which is divisible by 5.
// When the function called with this number.
// Then the function should return "buzz".

// Scenario 4: Fizzbuzz function returns "fizzbuzz".
// Given is a number which is divisible by 3 and 5.
// When the function called with this number.
// Then the function should return the "fizzbuzz".

function fizzBuzz(num) {
    let sum = "";
    let mod3 = num % 3 
    let mod5 = num % 5;
    
    if (mod3 > 0 && mod5 > 0) return num;
    
    sum += mod3 > 0 ? "" : "fizz";
    sum += mod5 > 0 ? "" : "buzz";

    return sum;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

numbers.forEach( el => console.log(fizzBuzz(el)));
// end
