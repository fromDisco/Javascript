// DEBOUNCE DECORATOR

/* 

The result of debounce(f, ms) decorator is a wrapper that suspends 
calls to f until there’s ms milliseconds of inactivity 
(no calls, “cooldown period”), then invokes f once with the latest arguments.

In other words, debounce is like a secretary that accepts “phone calls”, 
and waits until there’s ms milliseconds of being quiet. 
And only then it transfers the latest call information to “the boss” 
(calls the actual f).

For instance, we had a function f and replaced it with f = debounce(f, 1000).
Then if the wrapped function is called at 0ms, 200ms and 500ms, 
and then there are no calls, then the actual f will be only called once, 
at 1500ms. That is: after the cooldown period of 1000ms from the last call.

…And it will get the arguments of the very last call, other calls are ignored.

_____________________________________________________________________________

Now a practical example. Let’s say, the user types something, 
and we’d like to send a request to the server when the input is finished.

There’s no point in sending the request for every character typed. 
Instead we’d like to wait, and then process the whole result.

In a web-browser, we can setup an event handler 
– a function that’s called on every change of an input field. 
Normally, an event handler is called very often, for every typed key. 
But if we debounce it by 1000ms, then it will be only called once, 
after 1000ms after the last input.


*/


function debounce(func, time) {

    function args(message) {

        // if a new call comes in, and setTimeout() didn't execute
        // already, the min-Time between two function executions
        // isn't met => clear timeout, ...
        clearTimeout(args.debounceTimer);

        // ... and set an new Timeout
        args.debounceTimer = setTimeout(() => {
            func(message);

            // pass "this" if needed
            // func.apply(this, arguments);
        }, time, message);

    }

    // set "timeoutId" as a property of "args()"
    // so, it doesn't get overwritten on every 
    // function call
    args.timoutId = 0;

    return args;
}


let func = debounce(console.log, 1000);

func("a");
setTimeout(() => func("b"), 200);
setTimeout(() => func("c"), 500);
// debounced function waits 1000ms after the last call and then runs: 
// alert("c")