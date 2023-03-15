function findLongestWordLength(str) {
    let letterCount = 0;
    str.split(" ").forEach(el => {

        letterCount = el.length > letterCount ? el.length : letterCount;
    });
    return letterCount;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));


function largestOfFour(arr) {
    let maxNumbers = arr.map(el => Math.max(...el));
    return maxNumbers;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);


// ________________________________
function confirmEnding(str, target) {
    return str.substr(str.length - target.length) === target ? true : false;
}

confirmEnding("Bastian", "n");