// https://www.codewars.com/kata/520446778469526ec0000001/train/javascript

/* 

Complete the function/method (depending on the language) 
to return true/True when its argument is an array 
that has the same nesting structures and same corresponding length 
of nested arrays as the first array.

Return 'true' if and only if 'other' has the same
nesting structure as 'this'.

*/

Array.prototype.sameStructureAsMySolution = function (other) {

    if (this.length !== other.length) {
        return false;
    }

    for (let i = 0; i < this.length; i++) {

        const actualThis = typeof this[i] === "number" || "string" ? "primitive" : "object";
        const actualOther = typeof other[i] === "number" || "string" ? "primitive" : "object";

        if ( actualThis !== actualOther ) {
            return false;
        } else if (Array.isArray(this[i])) {
            // returning the recursive call passes "false" all the way the stack
            return this[i].sameStructureAs(other[i]);
        }

    }

    return true;
};



Array.prototype.sameStructureAs = function (other) {

    if (!Array.isArray(other) || this.length !== other.length) {
        // console.log(this.length !== other.length);
        return false;
    }

    if (Array.isArray(this)) {
        return this.every( (el, i) => {
            return Array.isArray(el) ? el.sameStructureAs(other[i]) : !Array.isArray(other[i]);
        })
    }

    return true;
};

// console.log( [1, [1, 1]].sameStructureAs([2,[2]]) );


// should return true
// console.log([ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] ));
// console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] ));  

// should return false 
// console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] ));  
// console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] ));  

// should return true
// console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] )); 

// // should return false
// console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] ));  

// should return true
// console.log([1,'[',']'].sameStructureAs(['[',']',1]));
