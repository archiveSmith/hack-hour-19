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

function mergeArrays(arr1, arr2) {

	function quickSort(arr){
		if(arr.length<=1){
			return arr;
		}
		let pivot = arr[0]; 
		let left = [];
		let right = [];
		for(let i=1; i<arr.length; i++){
			if(arr[i]<pivot){
				left.push(arr[i]);
			}
			else{
				right.push(arr[i]);
			}
		}
		return [].concat(quickSort(left), pivot, quickSort(right));
	}

	let combinedArr = arr1.concat(arr2); 
	return quickSort(combinedArr);
}

module.exports = mergeArrays;
