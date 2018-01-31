/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array) && array.length < 3) return 0;

  const highestNum = array.sort().slice(-3);
  return highestNum.reduce((x, y) => {
    return (x *= y);
  });

  // const highestNum = array
  //   .sort((a, b) => {
  //     return a - b;
  //   })
  //   .slice(-3);
  // return highestNum.reduce((x, y) => {
  //   return (x *= y);
  // });
}

console.log(highestProduct([-10, 6, 5, 4, 3, 2, 1]));

module.exports = highestProduct;
