// Write a function sumTo(n) that calculates the sum 
// of numbers 1 + 2 + ... + n.

// Make 3 solution variants:

// 1. Using a for loop.
// 2. Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
// 3. Using the arithmetic progression formula.

// ___________
// 1. for-loop
function forLoop(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(forLoop(100));


// ____________
// 2. recursion
function recursion(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + recursion(n - 1);
    }
}

console.log(recursion(5))


// _________________________
// 3. arithmetic progression
// https://en.wikipedia.org/wiki/Arithmetic_progression
function arithmetic(n) {
    const firstValue = 1;
    const lastValue = n;
    return (n * (firstValue + lastValue)) / 2
}

console.log(arithmetic(100));


// __________________
// factor calculation
function factorial(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// shorter
function factorialMusterloesung(n) {
    return n ? n * factorialMusterloesung(n - 1) : 1;
}

console.log(factorialMusterloesung(5));