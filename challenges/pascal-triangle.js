/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
  if (numRows < 1) return [];
  if (numRows === 1) return [[1]];
  const newRow = [];
  const previousRows = pascalTriangle(numRows - 1);
  const lastRow = previousRows[previousRows.length - 1];
  for (let i = 0; i < lastRow.length - 1; i++) {
    newRow.push(lastRow[i] + lastRow[i + 1]);  
  }
  newRow.push(1);
  newRow.unshift(1);
  previousRows.push(newRow);
  return previousRows;
}
console.log(pascalTriangle(1));
console.log(pascalTriangle(2));
console.log(JSON.stringify(pascalTriangle(3)));
console.log(JSON.stringify(pascalTriangle(4)));
console.log(JSON.stringify(pascalTriangle(5)));

module.exports = pascalTriangle;
