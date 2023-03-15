// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].
// The task is: find the contiguous subarray of arr with the maximal sum of items.
// Write the function getMaxSubSum(arr) that will return that sum.

function getMaxSubSum(list) {
    const subArr = [[list[0]]]; // fill subArr with first value of list
    let subIndex = 0;
    let noPositive = true;

    // // start iteration with 1 because subArr already contains list[0]
    for (let i = 1; i < list.length; i++) {

        // check if there are any positive values
        if (noPositive === true) {
            noPositive = list[i] > 0 ? false : true;
        }

        if (list[i] - 1 === list[i - 1]) {
            // push values to actual subarray as long as condition is true
            subArr[subIndex].push(list[i]);
        } else {
            // if no start a new subarray
            subIndex++;
            subArr[subIndex] = [list[i]];
        }
    }

    if (noPositive === true) {
        return [];
    }

    const reducer = (prevEl, el ) => prevEl + el;
    let sumSubArr = [];
    for (let subI = 0; subI < subArr.length; subI++) {
        sumSubArr.push(subArr[subI].reduce(reducer));
    }

    return Math.max(...sumSubArr);
}


// getMaxSubSum([-1, [2, 3], -9]); // // == 5 (the sum of highlighted items)
// getMaxSubSum([[2, -1, 2, 3], -9]); // == 6
// getMaxSubSum([-1, 2, 3, -9, [11]]); // == 11

getMaxSubSum([-1, 2, 3, -9]); // // == 5 (the sum of highlighted items)
getMaxSubSum([-2, -1, 1, 2]); // == 3
getMaxSubSum([100, -9, 2, -3, 5]); // == 100
getMaxSubSum([1, 2, 3]); // == 6 (take all)

// If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:
getMaxSubSum([-1, -2, -3]) // == 0


// loop and look if actual value - 1 === previos value
// if yes push arr[i] to subArr
// if subArr.length is 1 look for Math.max(subArr)

