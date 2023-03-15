// alternative Default Parameters
// ------------------------------

function nullishCoalescing(text) {
    // nullish coalescing operator
    // 0 and -1 are TRUE, null and undefined are FALSE
    // expression is defined, when not NULL or UNDEFINED
    text = text ?? "Ich bin der Ersatz";
    console.log(text);
}
console.log("***nullish***");
nullishCoalescing(0); // 0
nullishCoalescing(""); // empty string


function logicalOr(text) {
    // || doesn’t distinguish between false, 0, an empty string "" and null/undefined.
    text = text || "Ich bin der Ersatz";
    console.log(text);
}
console.log("***logicalOr***");
logicalOr(0); // "Ersatz" /false
logicalOr(""); // "Ersatz" /false


function strictEquality(text) {
    if (text === undefined) {
        text = undefined;
    }
    console.log(text);
}
console.log("***strictEquality***");
strictEquality(0); // 0
strictEquality(""); // empty string


// ---------------------------------------------------------------
// A function with an empty return or without it returns undefined
// ---------------------------------------------------------------

function doNothing() {};
console.log("***doNothing***");
console.log(doNothing() === undefined); // true


function getSomethingDoNothing(text) {
    return;
}
console.log("***getSomethingDoNothing***");
console.log(getSomethingDoNothing() === undefined); // true


function linebreakReturn(text) {
    return
    text + ". Es darf kein linebreak nach einem return kommen";
}
console.log("***linebreakReturn***");
console.log(linebreakReturn("Nein.")); // undefined --> unreachable Code


function linebreakWithParenthesis(text) {
    return (
        text + ". Mit Klammern, die nach dem Return eingefügt werden.");
}
console.log("***linebreakWithParenthesis***");
console.log(linebreakWithParenthesis("So gehts.")); // undefined


function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
        // console.log("##############");
        // console.log("i: " + i);

        for (let j = 2; j < i; j++) {
            console.log("j: " + j);
            if (i % j == 0) continue nextPrime;
        }

        // console.log(i); // a prime
        // console.log("_______________");
    }
}
console.log("***showPrimes***");
console.log(showPrimes(10)); // undefined

// Funktionen sollen möglichst nur eine Aufgabe erfüllen
// andere Aufgaben sollen in andere Funktionen ausgelagert werden
// eine Ausgabefunktion, gibt nur aus. Die Kalkulation übernimmt eine andere Funktion
function showPrimes2(n) {
    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
        alert(i); // a prime
    }
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}


// ____________________________
// Destructuring Assignment to Pass an Object as a Function's Parameters
// if half(arg) is called with an object, max and min properties are 
// used as arguments
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = ({ max, min }) => (max + min) / 2.0; 

// alternative object as argument and destructuring in a statement
const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
}