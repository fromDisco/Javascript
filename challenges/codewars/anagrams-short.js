function anagrams(word, words) {
    const wordArray = words;
    const wordArrayLength = wordArray.length;

    // count backwards, because deleted Elements at beginning 
    // change the index of following items
    for (let i = wordArrayLength - 1; i >= 0; i--) {
        // sorted word an words[i] can be compared.
        // if there is a differnce, word[i] is no Anagram
        const actualWord = [...wordArray[i]].sort();
        const sortedMatrix = [...word].sort();

        // function return true on difference. if true, delete word from Array
        compareLength(actualWord, sortedMatrix, wordArray, i)
        || compareWords(actualWord, sortedMatrix, wordArray, i) ? wordArray.splice(i, 1) : "";
    }
    return wordArray;
}


function compareLength(actualWord, sortedMatrix) {
    // compare Length. if different, delete word
    if (actualWord.length !== sortedMatrix.length) {
        return true;
    } 
    return false;
}


function compareWords(actualWord, sortedMatrix) {
    // compare chars of word and words[i]. if not equal, delete word[i]
    for (let charIndex = 0; charIndex < actualWord.length; charIndex++) {
        if (actualWord[charIndex] !== sortedMatrix[charIndex]) {
            return true;
        }
    }
    return false;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])); // => ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])); // => ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer'])); // => []