// .test() returns a boolean
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr); // string is used on regEx

// .match returns the result
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex); // regEx is used on string


let repeatString = "Repeat, Repeat, Repeat";
let repeatRegex = /Repeat/;
const repeatResult = repeatString.match(repeatRegex); 
console.log(repeatResult);


// Usernames can only use alpha-numeric characters.
// The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
// Username letters can be lowercase and uppercase.
// Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
let username = "JackOfAllTrades";
let userCheck = /^[a-z]+\d{2,}$|^[a-z]{2,}\d*$/i; // Change this line
let userResult = userCheck.test(username);


// Fix the regex so that it checks for the names of Franklin Roosevelt or Eleanor Roosevelt in a case sensitive manner and it should make concessions for middle names.
// Then fix the code so that the regex that you have created is checked against myString and either true or false is returned depending on whether the regex matches.
let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin) ([A-Z][a-z]*.{0,1} )?Roosevelt/; // Change this line
let checkNameResult = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works


// capture each word/number an swap them
let numStr = "one two three";
let fixRegex = /(\w+)(\s)(\w+)(\s)(\w+)/; // Change this line
let replaceText = numStr.replace(fixRegex, '$3 $2 $1'); // Change this line
console.log(replaceText);


// trim manually
// delete leading and trailing Spaces
let helloTrim = "   Hello, World!  ";
let trimRegex = /(^\s*\b)([A-Z].*[.?!])(\s*$)/; // Change this line
let resultTrim = helloTrim.replace(trimRegex, "$2"); // Change this line