// https://www.codewars.com/kata/58e0cb3634a3027180000040/train/javascript

// Sort an array by value and index

/* 

Your task is to sort an array of integer numbers by 
the product of the value and the index of the positions.

For sorting the index starts at 1, NOT at 0!
The sorting has to be ascending.
The array will never be null and will always contain numbers.

*/

function sortByValueAndIndex(array) {

    // first make objects with calculated indexes
    // then sort in order of the indexes
    let map = array.map( 
        (el, index) => ({ index: (index + 1) * el, value: el }))
        .sort( (a, b) => a.index - b.index);

    return map.map( el => el.value);

}



console.log(sortByValueAndIndex([ 1, 2, 3, 4, 5 ]));
// var expected = [ 1, 2, 3, 4, 5 ];    
    
console.log(sortByValueAndIndex([ 23, 2, 3, 4, 5 ]));
expected = [ 2, 3, 4, 23, 5 ];    
    
console.log(sortByValueAndIndex([ 26, 2, 3, 4, 5 ]));
// expected = [ 2, 3, 4, 5, 26 ];    
    
console.log(sortByValueAndIndex([ 9, 5, 1, 4, 3 ]));
// expected = [ 1, 9, 5, 3, 4 ];    