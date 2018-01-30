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

// i string
// true or false depending on if every word in the string closed by its reverse counterpart
// psuedo code - split the string into words


function matchWord (str) {
    let workingString = str.replace(/\W/g, '');
    console.log(workingString);
    let copy = workingString;

    let copy2 = workingString.split(' ').reverse().join();
    
}
matchWord("hell..o friend");

module.exports = matchWord;
