/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	if(typeof array != "object"){
		return 0;
	}
	if(array.length < 3){
		return 0;
	}
	console.log('array', array);
	let largestThree = [];


	let mapped = array.map(function (el){
		if(el > 0) {
			return [el, 'pos'];
		} else {
			return [el * -1, 'neg'];
		}
	});

	let sorted = mapped.sort(function (a, b){
		return b > a;
	});

	let count = 0;
	for(let i = 0; i < 3; i++) {
		if(sorted[i][1] === 'neg'){
			count++;
		}
	}
	if(count % 2 === 0) {
		return sorted[0][0] * sorted[1][0] * sorted[2][0];
	} else {
		largestThree = [];
		for(let i = 0; i < sorted.length; i++) {
			if(sorted[i][1] === 'pos' && largestThree.length <= 3) {
				if(sorted[i][0]=== 'neg'){
					largestThree.push(sorted[i][0] * -1);
				} else {
					largestThree.push(sorted[i][0]);
				}
			}
		}
		return largestThree[0] * largestThree[1] * largestThree[2];
	}

}

console.log(highestProduct([-2,10, 5, -3]));

//module.exports = highestProduct;
