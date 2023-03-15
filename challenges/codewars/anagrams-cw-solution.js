String.prototype.sort = function () {
    return this.split("").sort().join("");
};

function anagrams(word, words) {
    // filter returns a new array with those
    // elements who passed the test
    return words.filter(function (x) {
        return x.sort() === word.sort();
    });
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])); // => ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])); // => ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer'])); // => []