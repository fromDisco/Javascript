function getIndexToIns(arr, num) {
    // arr.push(num);
    arr.sort((a, b) => a - b);
    let index = arr.findIndex( el => el >= num);

    if (arr[index - 1] === num) {
        index--;
    } else if (index < 0) {
        index = arr.length;
    } 

    return index;
}

// getIndexToIns([40, 60], 50);
// getIndexToIns([3, 10, 5], 3);
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([2, 5, 10], 15));


function getIndexToInsShort (arr, num) {
    arr.push(num);
    arr.sort((a, b) => a - b);

    return arr.indexOf(num);
}



/* 
let arrSort = [3, 10, 5, 15];
console.log(arrSort.sort(function (a, b) {
    console.log("**********************");
    console.log(b + " <b:a> " + a);
    console.log(b - a);
    // return a - b;
    console.log("______________________");
    return b - a;
})); 
*/