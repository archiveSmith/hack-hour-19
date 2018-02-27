/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
	let yes = false;
	while (arr.length > 0 && (!yes)) {
		let popped = arr.pop();
		console.log(arr, popped);
		arr.forEach(function (el) {
			if (el + popped === n) {
				yes = true;
			}
		})
	}
	return yes;
}

//console.log(twoSum([10, -8, 6, 4, -2, 1], 11 ));

}

module.exports = twoSum;
