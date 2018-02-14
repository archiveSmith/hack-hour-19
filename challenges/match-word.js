// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
	let arr = [];
	let string = "";
	for(let i=0; i<str.length; i++){
		if(str.charAt(i).match(/[a-zA-Z]/)){
			string+=str.charAt(i); 
			continue; 
		}
		else{
			if(string.length>0){
				arr.push(string);
				string = ""; 
				continue; 
			}
			continue; 
		}
	}
	let count = arr.length; 
	for(let i=0; i<(Math.floor(arr.length/2)); i++){
		let reverse = arr[(arr.length-1-i)].split("").reverse().join("").toLowerCase(); 
		if(reverse==arr[i].toLowerCase){
			count -=2; 
		}
	}
	if(count>0){
		return false;
	}
	return true; 
	// for (let i=0; i<str.length; i++){
	// 	let reg = RegExp(str.charAt(i));
	// 	// logic: if current char in string matches the last element in the array.  
	// 	if(reg.test(arr[arr.length-1])){
	// 		arr.pop();
	// 		break; 
	// 	}
	// 	if(str.charAt(i).match(/a-zA-Z]/)) {
	// 		arr.push(str.charAt()); 
	// 		break; 
	// 	}
	// }
	// if(arr.length>0){
	// 	return false; 
	// }
	// return true; 
}

module.exports = matchWord;
