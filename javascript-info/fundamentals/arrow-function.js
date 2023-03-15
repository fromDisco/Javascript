// Arrow-Funktionen sind unter anderem eine verkürzte Schreibweise für eine Funktions-Deklaration
let sum = (a, b) => a + b;
console.log(sum(3, 4));


function sumFunc(a, b) {
    debugger; // stoppt an die Stelle beim Debugging im Browser
    return a + b; 
}
console.log(sumFunc(1, 2));


// Nur ein Argument
// Es werden keine Klammern benötigt
let double = n => 2 * n; 


// Kein Argument
// Klammern müssen trotzdem verwendet werden
let sayHi = () => console.log("Hi");


// Bei mehreren Zeilen muss ein RETURN genutzt werden
let sumReturn = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
};


// ______________________________
// In Arrow-Functions umschreiben
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}
  
ask(
    "Do you agree?",
    function() { console.log("You agreed."); },
    function() { console.log("You canceled the execution."); }
);

let askArrow = (question, yes, no) => confirm(question) ? yes() : no();
askArrow(
    "Wer hat an der Uhr gedreht?", 
    () => console.log("Ich"), 
    () => console.log("Ich nicht")
);
