// function counts up, even if it looks to count down. 
// but the callstack is read backwards, once the base case is reached
function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
    }
}
  console.log(countup(5));



// Only change code below this line
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        let countdownArr = countdown(n - 1);
        countdownArr.unshift(n);
        return countdownArr;
    }
}
// console.log(countdown(10));
// Only change code above this line


// given a start and an endnumber, 
// count from start to end while start is always less or equal to end
// if equal array should contain one value
function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
        return [endNum];
    } else {
        let rangeRider = rangeOfNumbers(startNum + 1, endNum);
        rangeRider.unshift(startNum);
        return rangeRider;
    }
};

// console.log(rangeOfNumbers(3, 3));