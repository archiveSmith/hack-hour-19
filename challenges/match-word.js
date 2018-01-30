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
  if (str==='') return true;

  //USE A STACK?
  //replace special characters with spaces
  let newStr = str.replace(/[^a-z]/gi, ' ');

  //trim leading and trailing white spaces
  newStr = newStr.trim();

  //split string at one or more spaces
  const separator = / +/;
  let strArray = newStr.split(separator);

  let obj = {};

  strArray.forEach((element) => {
    if (obj.hasOwnProperty(element.split('').reverse().join(''))){
      obj[element.split('').reverse().join('')] = element;
    } else {
      obj[element] = '';
    }
  });

  while (strArray.length > 0){
    let index = 0;
    while(obj.hasOwnProperty(strArray[index])){
      index++;
    }

    if (obj[strArray[index-1]]===strArray[index]){
      strArray.splice(index-1, 2);
    } else {
      return false;
    }
  }
  return true;
}

module.exports = matchWord;
