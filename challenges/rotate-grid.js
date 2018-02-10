/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 * 
 */

function rotateGrid(grid, n) {
  const output = [];
  for (let i = 0; i < n; i += 1) { output.push([]); }
  for (let i = n - 1; i >= 0; i -= 1) {
    const gridRow = grid[i];
    for (let j = 0; j < n; j += 1) {
      output[j].push(gridRow[j]);
    }
  }
  return output;
}

// const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(rotateGrid(grid, 3));

module.exports = rotateGrid;
