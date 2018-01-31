/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	// case for less than array.length <3
	if(array.length<=3){
		let product = 1; 
		for(let el of array){
			product*=el; 
		}
		return product; 
	}
	// else
	let maxProduct = 1; 
	for(let i=0; i<array.length; i++){
		let currentNum = array[i]; 
		let withoutNumArr = array.splice(i, 1); 
		for(let j=0; j<withoutNumArr.length; j++){
			let currentSet
			if(j==withoutNumArr.length-1){
				currentSet = currentNum.concat(withoutNumArr.slice(j), withoutNumArr.slice(0,1));  
			}
			else{
				currentSet = currentNum.concat(withoutNumArr.slice(j, j+2));
			}
			let currentProduct = 1; 
			for(let el of currentSet){
				currentProduct*=el; 
			}
			if(currentProduct>maxProduct){
				maxProduct = currentProduct;
			}
			currentProduct = 1; 
		}
	}
	return maxProduct; 
}


module.exports = highestProduct;
