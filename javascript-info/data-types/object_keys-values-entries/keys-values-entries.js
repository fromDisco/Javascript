let user = {
    name: "Gärt",
    age: 66,
}

let iq = Symbol("iq");
user[iq] = 20;

// Symbol is ignored by Object.values/keys/entries
for (const val of Object.values(user)) {
    console.log(val);
}

// shows all keys including Symbols
console.log(Reflect.ownKeys(user));
// shows only Symbols
console.log(Object.getOwnPropertySymbols(user));
console.log(user[iq]);


// transform objects
let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

for (const key in prices) {
    prices[key] = prices[key] * 3;
}

console.log(prices);


// https://javascript.info/keys-values-entries
// Objects are lacking array-methods like map()
// But making an array from the object, 
// transforming it with array-methods and
// turning it back to an object, does the trick

let pricesTrick = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePricesTrick = Object.fromEntries(
    // convert pricesTrick to array, map each key/value pair into another pair
    // and then fromEntries gives back the object
    Object.entries(pricesTrick).map(entry => [entry[0], entry[1] * 2])
);

console.log(doublePricesTrick.meat); // 8