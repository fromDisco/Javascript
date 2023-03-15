// SQUARE(N) SUM

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [2, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
	
	return numbers.reduce((prev, el) => {
		return el * el + prev;
	}, 0);
}


console.log(squareSum([0, 3, 4, 5])); // 50

