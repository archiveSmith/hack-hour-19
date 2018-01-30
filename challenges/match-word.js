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
  const stack = [];
  // const letters = str.match(/[a-zA-Z]/g);


  // if (str.split('_').length % 2 !== 0) {
  //   return false;
  // }
  const array = str.split(/[\s,_]+/);

  const clean = array.map(element => {
    return element.replace(/[^\w]/g, '').toLowerCase();
  });



  const wordMap = { while: 'elihw', 
                    try: 'yrt',
                    for: 'rof',
                    if: 'fi',
                    end: 'dne'};

  const noEmpties = [];

  clean.forEach(item => {
    if (item.length > 0) {
      noEmpties.push(item);
    }
  })
  
  // if (noEmpties.length === 1) {
    // return false;
  //   if (clean.join('') === clean.reverse().join('')) {
  //     return true;
  //   }
  // }

  let good = true;
  noEmpties.forEach(item => {
    if (Object.values(wordMap).includes(item)){
      const savedWord = stack.pop();
      if (savedWord.split('').reverse().join('') !== item) {
        good = false
      } 
    } else {
      stack.push(item);
    }
  });

  return good;
// if fi, case esac, while elihw
// words separated by space or punctuation

}

console.log(matchWord('__END_DNE-----'));
console.log(matchWord('__ENDDNE__'));
console.log(matchWord('IF()()fi[]'));
console.log(matchWord('for__if__rof__fi'));
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
console.log(matchWord(''));

module.exports = matchWord;
