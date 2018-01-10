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

function fizzbuzz(num){
    let counter = 0;
    let values = [];
    while(num > counter){
	counter++;
	if( counter % 5 === 0 && counter % 3 === 0){
	    values.push('fizzbuzz');
	    continue;
	}
	if( counter % 3 === 0){ values.push('fizz') }
	if( counter % 5 === 0){ values.push('buzz') }
	if( counter % 5 !== 0 && counter % 3 !== 0){ values.push(counter)}
    }
    return values;
}

module.exports = fizzbuzz;
