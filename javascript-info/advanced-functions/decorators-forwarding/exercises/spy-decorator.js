// https://javascript.info/call-apply-decorators

// Create a decorator spy(func) that should return a wrapper 
// that saves all calls to function in its calls property.

// Every call is saved as an array of arguments.

// P.S. That decorator is sometimes useful for unit-testing. 
// Its advanced form is sinon.spy in Sinon.JS library.


function work(args) {
    // this function is not ready to work with
    // a changing number of arguments
    return args[0] + args[1];
}

function spy(func) {

    // spread all arguments, 
    // so its possible to input 
    // a variable number of arguments
    function spyWrap(...args) {
        spyWrap.calls.push(args);
        return func(args);
    }
    
    // method of function spyWrap()
    spyWrap.calls = [];
    
    return spyWrap;
}


work = spy(work);
// work(1, 2); // 3
console.log(work(4, 5)); // 9

for (let args of work.calls) {
    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}
