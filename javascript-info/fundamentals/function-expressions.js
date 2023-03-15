// Beim Laden des Dokuments schaut JS zuerst nach globalen Variabeln und Funktionen und macht diese Verfügbar. 
// Deshalb funktionert ein Funktionsaufruf auch, bevor die Funktion im Dokument aufgeführt ist. 


// normale Deklaration einer Funktion
function sayHi() {
    console.log("Hi");
}
sayHi();
console.log(sayHi); // gibt ein Objekt aus. // alert(sayHi) gibt die function aus


// function expression 
// wird wie eine normale Variable zugewiesen. Funktion erhält wärend der Zuweisung keinen eigenen Namen.
let hello = function () { console.log("Hello" ); }; // ; nach dem Statement kommt ein Komma.


let sayHiCopy = sayHi; // Weist die Funktion sayHi einer neuen Variabel.
// kann zukünftig auch über die neue Variabel aufgerufen werden.
sayHiCopy();

// ____________________________________________
// in beiden Fällen wird die Funktion einer Variable zugewiesen. 
// Egal wie die Funktion zugewiesen wird. Sie ist ein WERT.
// Während reguläre Variabeln Daten enthalten enthält die Funktion eine Aktion. 
// Diese kann genau wie Werte zwischen Variabeln ausgetauscht werden. 
// let hello = function () { console.log("Hello" ); }; -> let hi = hello; console.log(hi()); -> "Hello"


// ____________________________________________
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}


// Die Funktionen sind in den Argumenten deklariert und haben keine Namen
//  
ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
);

// ___________________________________
let age = 16; // take 16 as an example

if (age < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

} else {

  function welcome() {
    alert("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.


welcome(); // Error: welcome is not defined

let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now