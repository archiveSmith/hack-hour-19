// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
  const numArr = [];
  const arr = [];
  for (let j = 1; j <= num; j += 1) {
    numArr.push(j);
  }
  numArr.forEach((elem) => {
    if (elem % 3 === 0 && elem % 5 === 0) {
      arr.push('fizzbuzz');
    } else if (elem % 3 === 0) {
      arr.push('fizz');
    } else if (elem % 5 === 0) {
      arr.push('buzz');
    } else {
      arr.push(elem);
    }
  }); return arr;
}

module.exports = fizzbuzz;
