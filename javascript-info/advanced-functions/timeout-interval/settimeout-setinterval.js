// SCHEDULING: SETTIMEOUT AND SETINTERVAL

// setTimeout allows us to run a function once after the interval of time.
// setInterval allows us to run a function repeatedly, 
// starting after the interval of time, then repeating 
// continuously at that interval.


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Interval functions see the outer Scope/Enviroment
// so the elements in this scope keep alive
// as long as the interval is running
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// __________
// setTimeout

function sayHi(optionalArg) {
    console.log('Hello ' + optionalArg);
}

let optionalPar = "You!";

// sayHi gets called after 4 seconds
// setTimeout passes a timer ID to the variable
let timerID = setTimeout(sayHi, 4000, optionalPar);


let cancelTimerId = setTimeout(killTimeout, 2000, timerID);

function killTimeout(timerID) {
    // kill timeout bevor execution
    clearTimeout(timerID) // repeat with the interval of 2 seconds
}


// ___________
// setInterval

// repeat with the interval of 2 seconds
let timerIntervalId = setInterval(() => console.log('tick'), 2000);

// after 5 seconds stop
setTimeout(() => {
    clearInterval(timerIntervalId);
    // console.log('stop');
}, 1000);


// __________
// Comparison

// setInterval runs the function
// in a fixed time interval
// if the function needs more time,
// than the inteval, the function
// is called over and over again

// let i = 10;
// setInterval(function () {
//     func(i++);
//     console.log(i);
// }, 1000);


// the nested setTimeout only runs,
// if the function is executed
// so the new cycle starts only
// if the function has finished
let recursiveInner = null;
let e = 1;
let recursive = setTimeout(run, 2000, e);

function run(index) {
    index++;
    recursiveInner = setTimeout(run, 2000, index);

    // setTimeout reads the outer variables when its declarized
    // but recursiveInner gets a new ID on every recursion
    // so "recursiveInner" ID doesnt match anmore, wenn "stopRecursion" is called => read further in stopRecursion()
    setTimeout(stopRecursion, 5000, recursive, recursiveInner);
    console.log(recursiveInner);
}
// clearInterval(recursive);
// clearInterval(recursiveInner);

function stopRecursion(recId, recursiveInner) {

    // because ID "recursiveInner" is old, loop over several variables
    for (let i = recursiveInner; i < recursiveInner + 10; i++) {
        clearTimeout(i);
    }

    clearTimeout(recId);
    // console.log("recID " + recId);
    // console.log("recInner " + recursiveInner);
}

// setTimeout(() => console.log("World"));

// alert("Hello");