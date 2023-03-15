// All strings are encoded using UTF-16. 
// each character has a corresponding numeric code. 
// There are special methods that allow to get the character 
// for the code and back.

// get the utf-16 code for a single character
console.log("z: " + "z".codePointAt(0) ); // 122
console.log("Z: " + "Z".codePointAt(0) ); // 90

// get the character for a specific utf-16 code
console.log("Z: " + String.fromCodePoint(90) ); // Z


// 90 is 5a in hexadecimal system
console.log( '\u005a' ); // Z

// loop through chars
let chars = [];
for (let i = 65; i < 220; i++) {
    chars.push(String.fromCodePoint(i));
}
console.log(chars);