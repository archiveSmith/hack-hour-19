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
 * BONUS: Do this in place
 */

grid1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

function rotateGrid(grid, n) {
  let arr = [];
  for (let i = 0; i < grid.length; i += 1) {
    let sub_arr = [];
    for (let j = 0; j < grid.length; j += 1) {
      sub_arr.push(grid[grid.length - 1 - j][i]);
    }
    arr.push(sub_arr);
  }
  return arr;
}

module.exports = rotateGrid;
