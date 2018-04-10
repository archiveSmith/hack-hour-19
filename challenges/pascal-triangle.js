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
  if (typeof numRows !== 'number') return;
  if (numRows < 1) return [];
  const triangle = [
    [1]
  ];
  for (let i = 1; i < numRows; i ++) {
    let newRow = [];
    newRow.push(1);
    for (let j = 0; j < triangle[i-1].length - 1; j ++) {
      newRow.push(triangle[i-1][j] + triangle[i-1][j+1]);
    }
    newRow.push(1);
    triangle.push(newRow);
    // console.log(triangle);
  }
  // console.log(triangle);
  return triangle;
}

// console.log(pascalTriangle(6));

module.exports = pascalTriangle;
