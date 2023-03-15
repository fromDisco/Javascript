// An isogram is a word that has no repeating letters, 
// consecutive or non-consecutive. Implement a function 
// that determines whether a string that contains only 
// letters is an isogram. Assume the empty string is an isogram. 
// Ignore letter case.

function isIsogram(str) {
    str = str.toLowerCase();

    // recursive option
    if (str.length == 0) return true;

    // check from index 1, to exclude the searchstring 
    if (str.includes(str[0], 1)) return false;

    // recursive call with string - string[0]
    // because string[0] is already checked
    return isIsogram(str.slice(1));

}

function isIsogramFromCodeWars(str) {
    // searches a letter that is reused. 
    // \1 matches the same text as in group 1
    return !/(\w).*\1/i.test(str);

    // checks if size of new Set of chars is the same as original str.length
    return new Set(str.toUpperCase()).size == str.length;

}



console.log(isIsogram("Dermatoglyphics")); // true );
console.log(isIsogram("isogram")); // true );
console.log(isIsogram("aba")); // false, "same chars may not be adjacent" );
console.log(isIsogram("moOse")); // false, "same chars may not be same case" );
console.log(isIsogram("isIsogram")); // false );
console.log(isIsogram("")); // true, "an empty string is a valid isogram" );