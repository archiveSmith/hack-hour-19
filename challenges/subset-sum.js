/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

//got fucked on this one

var swap = function (array, pos1, pos2) {
	var temp = array[pos1];
	array[pos1] = array[pos2];
	array[pos2] = temp;
};

var heapsPermute = function (array, output, n) {
	n = n || array.length; // set n default to array.length
	if (n === 1) {
		output(array);
	} else {
		for (var i = 1; i <= n; i += 1) {
			heapsPermute(array, output, n - 1);
			if (n % 2) {
				var j = 1;
			} else {
				var j = i;
			}
			swap(array, j - 1, n - 1); // -1 to account for javascript zero-indexing
		}
	}
};

let global = [];

// For testing:
var print = function(input){
	global.push(input);
}

function subsetSum(array, target) {
	heapsPermute(array, print, array.length);
	console.log(global);
}


console.log(subsetSum([3, 7, 4, 2], 5)) //- > true, 3 + 2 = 5
// console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)) //-> true, 3 + 12 + 5 + 12 = 32
// console.log(subsetSum([8, 2, 4, 12], 13)) //-> false
// console.log(subsetSum([8, -2, 1, -3], 6)) //-> true, 8 + 1 + (-3) = 6

//module.exports = subsetSum;
