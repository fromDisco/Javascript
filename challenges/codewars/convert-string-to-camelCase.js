// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

/* 
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

CONVERT STRING TO CAMEL CASE

Complete the method/function so that it converts dash/underscore 
delimited words into camel casing. The first word within the output 
should be capitalized only if the original word was capitalized 
(known as Upper Camel Case, also often referred to as Pascal case).
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/


function toCamelCase(str){

    const searchStr = /[-_]\w/g;
    
    // matches _ or - followed by char. 
    // Only char is needed. So use match[1] 
    const toUpperC = (match) => match[1].toUpperCase();

    return str.replace(searchStr, toUpperC );

}

console.log(toCamelCase('')); // '', "An empty string was provided but not returned")
console.log(toCamelCase("the_stealth_warrior")); // "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
console.log(toCamelCase("The-Stealth-Warrior")); // "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
console.log(toCamelCase("A-B-C")); // "ABC", "toCamelCase('A-B-C') did not return correct value")
