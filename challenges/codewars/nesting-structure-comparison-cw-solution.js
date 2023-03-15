Array.prototype.sameStructureAs = function (other) {
  return Array.isArray(other) && this.length == other.length && this.every(function (a, i) {
    var b = other[i];
    return Array.isArray(a) ? a.sameStructureAs(b) : !Array.isArray(b);
  });
};

// should return true
console.log([ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] ));
// console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] ));  

// should return false 
console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] ));  
// console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] ));  

// should return true
console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] )); 

// // should return false
console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] ));  

// should return true
console.log([1,'[',']'].sameStructureAs(['[',']',1]));
