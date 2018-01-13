/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
	if(array.length===1){
		return true;
	}
	function mode(array){
		let mode = 0;
		let modeCount = 0; 
		for(let el of array){
			let tempCount = 0;
			for(let ch of array){
				if(el===ch){
					tempCount++; 
				}
			}
			if(tempCount>modeCount){
				mode = el; 
			}
			if(tempCount===modeCount){
				if(el > mode){
					mode = el;
				}
			}
		}
		return mode; 
	}

	function mean(array){
		let mean = 0;
		for(let el of array){
			mean+=el; 
		}
		mean = Math.floor(mean/array.length);
		return mean;
	}
	

	let Mode = mode(array);
	let Mean = mean(array);
	
	if(mean === mode){
		return true;
	}
	return false;
}

module.exports = modemean;
