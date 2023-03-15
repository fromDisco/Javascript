// Arrays and strings are most widely used built-in iterables.
// For a string, for..of loops over its characters:

for (let char of "test") {
    // triggers 4 times: once for each character
    // console.log(char); // t, then e, then s, then t
}

// And it works correctly with surrogate pairs!
let str = '𝒳😂';
for (let char of str) {
    // console.log(char); // 𝒳, and then 😂
}


// ______________________________
// CALLING AN ITERATOR EXPLICITLY
let strIter = "Hello";

// does the same as
// for (let char of str) alert(char);
let iterator = strIter[Symbol.iterator]();

while (true) {
    console.log(iterator);
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value); // outputs characters one by one
}