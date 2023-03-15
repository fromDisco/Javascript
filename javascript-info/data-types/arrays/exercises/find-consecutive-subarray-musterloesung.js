function getMaxSubSum(arr) {
    let maxSum = 0; // if we take no elements, zero will be returned

    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
        }
    }

    return maxSum;
}

// console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, 9, 11])); // 11
// console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
// console.log(getMaxSubSum([1, 2, 3])); // 6
// console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100


function getMaxSubSumShortFast(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) { // for each item of arr
        partialSum += item; // add it to partialSum
        maxSum = Math.max(maxSum, partialSum); // remember the maximum
        if (partialSum < 0) partialSum = 0; // zero if negative
    }

    return maxSum;
}

console.log( getMaxSubSumShortFast([-1, 2, 3, -9]) ); // 5
console.log( getMaxSubSumShortFast([-1, 2, 3, -9, 11]) ); // 11
console.log( getMaxSubSumShortFast([-2, -1, 1, 2]) ); // 3
console.log( getMaxSubSumShortFast([100, -9, 2, -3, 5]) ); // 100
console.log( getMaxSubSumShortFast([1, 2, 3]) ); // 6
console.log( getMaxSubSumShortFast([-1, -2, -3]) ); // 0