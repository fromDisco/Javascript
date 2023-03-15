// ITERATION OVER MAP

// For looping over a map, there are 3 methods:

// - map.keys() – returns an iterable for keys,
// - map.values() – returns an iterable for values,
// - map.entries() – returns an iterable for entries 
// [key, value], it’s used by default in for..of.

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

console.log("recipeMap: ");
console.log(recipeMap);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()

    // insertion Order is used: Map preserves this order, unlike an object
    console.log(entry); // cucumber,500 (and so on)
    
}