/* 
Write a function dirReduc which will take an array of strings 
and returns an array of strings with the needless directions 
removed (W<->E or S<->N side by side). 
*/

function dirReduc(arr) {
    let deletePairs = ["NORTHSOUTH", "SOUTHNORTH", "WESTEAST", "EASTWEST"];

    // no automatic increase of i. Because, deletion changes array
    for (let i = 0; i < arr.length;) {

        // check if actual value is opposite to next
        if (deletePairs.indexOf(arr[i] + arr[i + 1]) !== -1) {
            arr.splice(i, 2); 
            i = 0; // reset loop to check if deletion created another pair
        } else i++; // if actual pair didn't match try next pair
        
    }
    return arr;
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])); // ["WEST"])
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])); // ["NORTH", "WEST", "SOUTH", "EAST"])
// dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]) // []


/*

loop 
no automatic increase of i. Because, deletion changes array
check if actual value is opposite to next
if yes
delte both values
if no
i++



function dirReduc(arr) {

    let notFinished = true;
    while (notFinished === true) {
        if (arr.indexOf("NORTH") !== -1 && arr.indexOf("SOUTH") !== -1) {
            arr.splice(arr.indexOf("SOUTH"), 1);
            arr.splice(arr.indexOf("NORTH"), 1);
            continue;
        } 
        if (arr.indexOf("EAST") !== -1 && arr.indexOf("WEST") !== -1) {
            arr.splice(arr.indexOf("EAST"), 1);
            arr.splice(arr.indexOf("NORTH"), 1);
            continue;
        } 
        notFinished = false;
    }

    return arr;
}
*/