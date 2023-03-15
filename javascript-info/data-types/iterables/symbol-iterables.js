let range = {
    from: 1,
    to: 5
};

// for (const iterator of range) {
//     console.log(iterator); // Uncaught TypeError: range is not iterable
// }

for (const iterator in range) {
    console.log(iterator); // from, to
}

// We want the for..of to work:
// for(let num of range) ... num=1,2,3,4,5

// to make the object iterable a method named 
// Symbol.iterator (special built-in symbol for that purpose)
// has to be added

// when for...of starts the Symbol.iterator method
// the iterator must return an iterator and an object with the method next()
// for...of only works with the returned object
// next() calls on that object
// The result of next() must have the form 
// {done: Boolean, value: any}, 
// where done=true means that the loop is finished, 
// otherwise value is the next value.

let rangeIterator = {
    from: 1,
    to: 5
};


// ___________________________________________
// HERE THE ITERATOR-METHOD IS SEPERATE FROM THE METHOD
// 1. call to for..of initially calls this
rangeIterator[Symbol.iterator] = function () {

    // ...it returns the iterator object:
    // 2. Onward, for..of works only with the iterator object below, asking it for next values
    return {
        current: this.from,
        last: this.to,

        // 3. next() is called on each iteration by the for..of loop
        next() {
            // 4. it should return the value as an object {done:.., value :...}
            if (this.current <= this.last) {
                return {
                    done: false,
                    value: this.current++
                };
            } else {
                return {
                    done: true
                };
            }
        }
    };
};

// now it works!
for (let num of rangeIterator) {
    // The range itself does not have the next() method.
    // Instead, another object, a so-called “iterator” is created 
    // by the call to range[Symbol.iterator](), 
    // and its next() generates values for the iteration.
    console.log(num); // 1, then 2, 3, 4, 5
}


// _________________________________________________
// its possible to include the methods to the object
let rangeIncludeIterator = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return {
                done: false,
                value: this.current++
            };
        } else {
            return {
                done: true
            };
        }
    }
};

for (let num of rangeIncludeIterator) {
    console.log(num); // 1, then 2, 3, 4, 5
}