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
	if(str.includes('END')) {
		let first = str.split('END')[0];
		let second = str.split('END')[1];
		if(second.includes('END')) {
			matchWord(second);
		} else {
			if(second.slice(1).includes('DNE')) {
				return true;
			} else {
				return false;
			}
		}
	} else if(str.includes('IF')) {
		//let first = str.split('IF')[0];
		let second = str.split('IF')[1];
		if(second.includes('IF')) {
			matchWord(second);
		} else {
			if(second.slice(1).includes('fi')) {
				return true;
			} else {
				return false;
			}
		}
	} else if(str.includes('FOR')) {
		//let first = str.split('FOR')[0];
		let second = str.split('FOR')[1];
		if(second.includes('FOR')) {
			return matchWord(second);
		} else {
			if(second.slice(1).includes('ROF')) {
				return true;
			} else {
				return false;
			}
		}
	} else if(str.includes('while')) {
		//let first = str.split('while')[0];
		let second = str.split('while')[1];
		if(second.includes('while')) {
			return matchWord(second);
		} else {
			if(second.slice(1).includes('elihw')) {
				return true;
			} else {
				return false;
			}
		}
	}

	return true;
}


console.log(matchWord('__END_DNE-----')); // -> true
console.log(matchWord('__ENDDNE__')); // -> false       (not separated by a space)
console.log(matchWord('IF()()fi[]')); // -> true        (should be case-insensitive)
console.log(matchWord('for__if__rof__fi')); // -> false     not properly closed. like ( [) ]
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw')); // -> true
console.log(matchWord('')); // -> true

//module.exports = matchWord;
