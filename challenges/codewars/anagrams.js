function anagrams(word, words) {
    // spread word-string as argument
    const wordTemplate = countChars(word);

    // loop through words-array an every containing word
    const wordsToCheck = [];
    for (let i = 0; i < words.length; i++) {
        // push object of every word in wordToCheck
        wordsToCheck.push(countChars(words[i]));
    }

    let returnAnagrams = deleteNonAnagrams(wordTemplate, wordsToCheck); 
    returnAnagrams.forEach( (el, index) => returnAnagrams[index] = el[1] ); // returnAnagrams contains objects, but we only need property 1
    return returnAnagrams;
}


function countChars(word) {
    // reset charList with every function-call
    let charList = {
        1: word,
    };
    
    // expand word to array and loop through chars of word
    [...word].forEach((char) => {
        // if char is already there, add one to counter, otherwise add property and set to 1
        charList.hasOwnProperty(char) ? charList[char]++ : charList[char] = 1;
    });
    return charList;
}


function deleteNonAnagrams(template, objArray) {
    // loop through every object in wordsToCheck
    let length = objArray.length;
    for (let i = length; i >= 0; i--) {
        for (const prop in objArray[i]) {
            if (prop != 1 && !template.hasOwnProperty(prop)) {
                // if prop isnt found delete the whole object
                objArray.splice(i, 1);
                break;
            } else if (prop != 1 && template[prop] !== objArray[i][prop]) {
                objArray.splice(i, 1);
                break;
            } 
        }
    }
    // return the cleaned array
    return objArray;
}



console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])); // => ['aabb', 'bbaa']
// console.log(anagrams('laser', ['lazing', 'lazy',  'lacer'])); // => ['aabb', 'bbaa']
// console.log(anagrams('laser', ['lazing', 'lacer'])); // => ['aabb', 'bbaa']
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']); // => ['carer', 'racer']
// anagrams('laser', ['lazing', 'lazy',  'lacer']); // => []