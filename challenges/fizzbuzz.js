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
// function fizzbuzz(num) {  
//     let output = [];
//     for (let i = 1; i <= num; i++) {
//         if(i % 3 === 0 && i % 5 === 0){
//             output.push('fizzbuzz')
//         }else if(i % 3 === 0){
//             output.push('fizz')
//         }else if(i % 5 === 0){
//             output.push('buzz')
//         }else{
//             output.push(i)
//         }
//     }
//     return output;
// }
//[ 1, 2,'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 'fizz', 13, 14, 'fizzbuzz', 16]





//OR Three-liner with array
// function fizzbuzz(num) { 
//     let arr = [];
//     for (let i = 1; i <= num; i++) { (i % 3 === 0 && i % 5 === 0) ? arr.push('fizzbuzz') : (i % 5 === 0) ? arr.push('buzz') : (i % 3 === 0) ? arr.push('fizz') : + arr.push(i)}
//     return arr;
// }
// OR One-liner without array and console.log() 
function fizzbuzz(num) { 
    for (let i = 1; i <= num; i++) { console.log((i % 3 === 0 && i % 5 === 0) ? 'fizzbuzz' : (i % 5 === 0) ? 'buzz' : (i % 3 === 0) ? 'fizz' : + i)}

}
console.log(fizzbuzz(100))


