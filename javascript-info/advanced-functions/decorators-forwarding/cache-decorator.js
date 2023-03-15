// DECORATORS
// In the code below cachingDecorator is a decorator: 
// a special function that takes another function and alters its behavior.

// The idea is that we can call cachingDecorator for any function, 
// and it will return the caching wrapper. That’s great, 
// because we can have many functions that could use such a feature, 
// and all we need to do is to apply cachingDecorator to them.



function slow(x) {
  // there can be a heavy CPU-intensive job here
  console.log(`Called with ${x}`);
  return x;
}

function fast(x) {
  // there can be a heavy CPU-intensive job here
  console.log(`Fast with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {    // if there's such key in cache
      return cache.get(x); // read the result from it
    }

    let result = func(x);  // otherwise call func

    cache.set(x, result);  // and cache (remember) the result
    return result + " new";
  };
}

// give the function itself as a parameter ...(slow)
// gets called if cache doesnt inlude actual value
slow = cachingDecorator(slow);

console.log( slow(1) ); // slow(1) is cached and the result returned
console.log( "Again: " + slow(1) ); // slow(1) result returned from cache

console.log( slow(2) ); // slow(2) is cached and the result returned
console.log( "Again: " + slow(2) ); // slow(2) result returned from cache


fast = cachingDecorator(fast);
console.log( fast(3) ); // fast(3) is cached and the result returned
console.log( "Again: " + fast(3) ); // fast(3) result returned from cache

console.log( fast(4) ); // fast(4) is cached and the result returned
console.log( "Again: " + fast(4) ); // fast(4) result returned from cache



