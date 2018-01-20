//Write a function that return an array containing the numbers 1 to num.  put 'fizz' in place
//of numbers divisible by 3, 'buzz' in place of numbers divisible by 5, and fizzbuzz in place
//of numbers divisible by both 3 and 5

function fizzbuzz(num){
  let holder = [];
  for (var i = 1; i <= num; i++){
    if(i % 3 == 0 || i % 5 == 0){
      var string = '';
      if(i % 3 === 0){
        string += 'fizz';
      }
      if(i % 5 === 0){
        string += 'buzz';
      }
      holder.push(string);
      continue;
    } else {
    holder.push(i);
    }
  }
  return holder;
}
console.log(fizzbuzz(16));
module.exports = fizzbuzz;
