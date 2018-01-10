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

function fizzBuzz(num) {
    var array = [];
    var count = 1;
    while (count <= num) {
        array.push(count);
        count++;
    }
    console.log(array);
    return array.map(function (el) {
        if(el % 3 === 0 && el % 5 === 0) {
            return "fizzbuzz";
        } else if (el % 3 === 0) {
            return "fizz";
        } else if (el % 5 === 0) {
            return "buzz";
        } else {
            return el
        }
    });
}




module.exports = fizzbuzz;
