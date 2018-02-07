/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2, total) {
	if (!total) total = [];
	if(arr1.length === 0) {
		for (let i = 0; i < arr2.length; i++) {
			total.push(arr2[i]);
		}
		arr2 = [];
	}
	if(arr2.length === 0) {
		for (let i = 0; i < arr1.length; i++) {
			total.push(arr1[i]);
		}
		arr1 = [];
	}
	if (arr1.length > 0 || arr2.length > 0) {
		let smallest = getSmallest([arr1[0], 'left'], [arr2[0], 'right']);
		total.push(smallest[0]);
		if (smallest[1] === 'left') {
			arr1.shift();
		}
		if(smallest[1] === 'right') {
			arr2.shift();
		}
		mergeArrays(arr1, arr2, total);
	}
	return total;
}

function getSmallest(arr1, arr2) {
	if (arr1[0] < arr2[0]) return arr1;
	return arr2;
}

var my_array = [3,4,6,10,11,15,21];
var another_array = [1,5,8,12,14,19];
console.log(mergeArrays(my_array, another_array)); //-> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]


module.exports = mergeArrays;
