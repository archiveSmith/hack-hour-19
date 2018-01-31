/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	let sorted = array.sort(function (a, b){
		return b > a;
	});
	return sorted[0] * sorted[1] * sorted[2];
}

//console.log(highestProduct([100, 10, 3, 2, 5, 6]));

module.exports = highestProduct;
