// Using “func.call” for the context

// The caching decorator from cach-decorator.js  
// is not suited to work with object methods.


let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    console.log("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};

function cachingDecorator(func) {

  let cache = new Map();

  return function(x) {

    if (cache.has(x)) {
      return cache.get(x);
    }

    let result = func.call(this, x); // "this" is passed correctly now
    cache.set(x, result);
    return result;
  };
}

// worker.slow = cachingDecorator(worker.slow); // now make it caching

// console.log( worker.slow(2) ); // works
// console.log( worker.slow(2) ); // works, doesn't call the original (cached)


// _____________________________
// GOING MULTI-ARGUMENT

let workerMulti = {
  someMethod() {
    return 1;
  },

  slow(min, max) {
    console.log("Called with " + min + " and " + max);
    return min * this.someMethod() + max; // (*)
  }
};

function hash(args) {

  // join with "-"-seperator because else
  // there is no difference between 23-99 and 2-399
  return Array.from(args).join("-");

  // method-borrowing 
  // [].join.call(arguments); // 1,2

}

function cachingDecoratorMulti(func) {

  let cache = new Map();

  return function(x, y) {

    // return an identifier
    let hashKey = hash(arguments);

    if (cache.has(hashKey)) {
      return cache.get(hashKey);
    }

    let result = func.apply(this, arguments); // "this" is passed correctly now
    cache.set(hashKey, result);
    return result;
  };
}

workerMulti.slow = cachingDecoratorMulti(workerMulti.slow); // now make it caching

console.log( workerMulti.slow(2, 3) ); // works
console.log( workerMulti.slow(2, 3) ); // works