// let i = 5;
// while (i < 5) {
//     console.log("i: " + i);
//     i++;
// } // no iteration

// let j = 5;
// do {
//     console.log("j: " + j);
//     j++;
// } while (j < 5); // one iteration

// For-iteration-Variables can be outsourced
console.log("++k");
let k = 0;
for (; k < 5;) {
    console.log("k: " + ++k);
} // Output 1-5

console.log("++k");
for (let k1 = 0; k1 < 5; ++k1) {
    console.log("k1: " + k1);
} // Output 0-4

console.log("l++");
for (let l = 0; l < 5; l++) {
    console.log("l: " + l);
} // Output 0-4

for (let m = 0; m < 5; m++) {
    console.log("m :" + m);
    if (m == 3) break;
} // break Loop

for (let n = 0; n < 5; n++) {
    if (n == 3) continue;
    console.log("n :" + n);
} // skip current iteration

// a LABEL is an identifiert before a loop
// break only breaks the inner loop. 
// 'break outer' looks for the label 'outer' and breaks out of that loop
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let input = prompt(`Value at coords (${i},${j})`, '');
      // if an empty string or canceled, then break out of both loops
      if (!input) break outer; // (*)
      // do something with the value...
    }
  }
alert('Done!');


function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
      let row = [];

      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }

      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log(matrix);
  