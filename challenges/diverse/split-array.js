function chunkArrayInGroups(arr, size) {
    let twoDimensions = [];
    for (let i = 0; i < arr.length; i += size) {
        // slice arr from i for number of value given by size
        twoDimensions.push(arr.slice(i, i + size));
    }
    return twoDimensions;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));