// function summaryRanges(nums) {
//     let rangesOut = [];
//     let lowEnd = nums[0], highEnd = 0;

//     for (let i = 0; i < nums.length; i++) {
//         // check if nums[i] + 1 equal to nums[i + 1] or if its bigger, than nums[i] === nums[i + 1]
//         if (!(nums[i] + 1 >= nums[i + 1]) && nums[i + 1] !== undefined) {
//             highEnd = nums[i];
//             // if highEnd === lowEnd it has to be at the very beginning of the array, so only push lowEnd
//             highEnd === lowEnd ? rangesOut.push(`${lowEnd}`) : rangesOut.push(`${lowEnd}->${highEnd}`);
//             lowEnd = nums[i + 1];
//         } else if (nums[i + 1] == undefined) {
//             highEnd = nums[i];
//             // if lowEnd is smaller than highEnd, its a range
//             lowEnd < highEnd ? rangesOut.push(`${lowEnd}->${highEnd}`) : rangesOut.push(`${highEnd}`);
//         }
//     }
//     return rangesOut;
// }

function summaryRanges(nums) {
    let rangesOut = [];
    let lowEnd = nums[0],
        highEnd = 0;

    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] + 1 === nums[i + 1]) || nums[i] === nums[i + 1]) {
            continue;
        } else {
            highEnd = nums[i];
            // if highEnd === lowEnd it is no range
            highEnd === lowEnd ? rangesOut.push(`${lowEnd}`) : rangesOut.push(`${lowEnd}->${highEnd}`);
            lowEnd = nums[i + 1];
        }
    }
    return rangesOut;
}

// summaryRanges([]) //[]);
// summaryRanges([1,1,1,1]) //['1']);
// console.log(summaryRanges([1,2,3,4])); //['1->4']);
console.log(summaryRanges([0, 1, 2, 5, 6, 9])); //["0->2", "5->6", "9"]);
// console.log(summaryRanges([0, 1, 2, 3, 3, 3, 4, 5, 6, 7])); //["0->7"]);
// console.log(summaryRanges([0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7])); //["0->7"]);
// console.log(summaryRanges([0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10])); // ["0->7","9->10"]);
console.log(summaryRanges([-2, 0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10, 12])); //["-2", "0->7", "9->10", "12"]);