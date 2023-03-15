// FIBONACCI NUMBERS

// The sequence of Fibonacci numbers has the formula 
// Fn = Fn-1 + Fn-2. In other words, the next number 
// is a sum of the two preceding ones.

// First two numbers are 1, then 2(1+1), then 3(1+2), 
// 5(2+3) and so on: 1, 1, 2, 3, 5, 8, 13, 21....

// Write a function fib(n) that returns the n-th Fibonacci number.

function fib(n) {
    let preceding1 = 0;
    let preceding2 = 1;
    let sum = 0;
    for (let i = 1; i < n; i++) {
        sum = preceding1 + preceding2;
        preceding1 = preceding2;
        preceding2 = sum;
    }
    // first loop doesnt run !(i < n)
    // preceding2 is alwas set to sum
    // so output preceding2,
    // so it includes n = 1
    return preceding2;
 }

console.log(fib(5)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757
