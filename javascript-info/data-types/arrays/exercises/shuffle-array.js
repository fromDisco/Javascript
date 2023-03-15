// SHUFFLE AN ARRAY
// Write the function shuffle(array) that shuffles 
// (randomly reorders) elements of the array.
// Multiple runs of shuffle may lead to different orders of elements. 
// For instance:

let arr = [1, 2, 3];

function shuffle(arr) {

    if (arr.length <= 0) {
        return;
    }

    let randomVal = Math.floor(Math.random() * arr.length);

    // random Value to newVal and delete the random value from arr
    const newVal = arr.splice(randomVal, 1);

    // RECALL FUNCTION WITH SHORTEND ARRAY
    shuffle(arr);

    // after recursion is finished push value of current stack back to arr
    arr.push(...newVal);
    return arr;

}


// https://javascript.info/array-methods#transform-an-array
function shuffleMusterloesung(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

        // swap elements array[i] and array[j]
        // we use "destructuring assignment" syntax to achieve that
        // you'll find more details about that syntax in later chapters
        // same can be written as:
        // let t = array[i]; array[i] = array[j]; array[j] = t
        [array[i], array[j]] = [array[j], array[i]];
    }
}


console.log(shuffle(arr));
// arr = [3, 2, 1]

// counts of appearances for all possible permutations
let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
};

for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
}

// show counts of all possible permutations
for (let key in count) {
    console.log(`${key}: ${count[key]}`);
}