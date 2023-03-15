function sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        // sum(arr, n - 1) is undefined until last recursion is returning 0. 
        // than the call stack dissolves from bottom to top. from last call to first call.
        return sum(arr, n - 1) + arr[n -  1];
    }
}

// sum up to index n
console.log(sum([1, 4, 5, 9], 3));