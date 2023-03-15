function frankenSplice(arr1, arr2, n) {
    let output = [...arr2];
    output.splice(n, 0, ...arr1);
    return output;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));