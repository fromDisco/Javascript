function makeCounter() {
    // instead of:
    // let count = 0

    function counter() {
        return counter.count++;
    };

    // can be accessed whereever 
    // even outside the function
    // watch under assignment of "let counterVar"
    // INSIDE OF FUNCTION PROP BELONGS TO "COUNT"
    counter.count = 0;

    // returns counter()
    // by calling counterVar()
    return counter;

}

let counterVar = makeCounter();

console.log(counterVar()); // 0
console.log(counterVar()); // 1

// OUTSIDE OF THE FUNCTION THE PROP 
// BELONGS TO "COUNTERVAR"
counterVar.count = 6;

console.log(counterVar()); // 6