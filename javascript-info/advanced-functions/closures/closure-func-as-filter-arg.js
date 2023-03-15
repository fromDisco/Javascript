// SUM WITH CLOSURES
// sum(a)(b) = a+b;

// Write function sum that works like this: sum(a)(b) = a+b.
// Yes, exactly this way, using double parentheses (not a mistype).

function sum(num) {

    // for sum(a)(b) 
    // a is in lexical enviroment of sum()
    // b is in lexical enviroment of sum()() 
    // -> scope of function in return
    return function(num2) {
        return num + num2;
    }

}

console.log(sum(1)(2));


// _______________________
// FILTER THROUGH FUNCTION
// We have a built-in method arr.filter(f) for arrays. 
// It filters all elements through the function f. 
// If it returns true, then that element is returned in the resulting array.

// Make a set of “ready to use” filters:

// inBetween(a, b) – between a and b or equal to them (inclusively).
// inArray([...]) – in the given array.
// The usage must be like this:

// arr.filter(inBetween(3,6)) – selects only values between 3 and 6.

// arr.filter(inArray([1,2,3])) – selects only elements matching with 
// one of the members of [1,2,3].


function inBetween(a, b) {

    // Uncaught ReferenceError: el is not defined
    // console.log(el); // 

    // arr is reachable
    // the outer context of the call is arr
    // console.log(arr);

    return function(el) {

        // el is only reachable in another function 
        // .filter(inBetween(3, 6)) 
        // the whole call "inBetween(3, 6)" is the variable
        // for arr.filter( el => el )
        // so the call would normally look like "inBetween(3, 6)(el)"
        return a <= el && el <= b;

    }
}


function inArray(arr) {
    
    // arr is argument array
    // el from call inArray([])(el)
    return (el) => arr.includes(el);

}


let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2