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

function rotateGrid(grid, n) {

  if(typeof n !== 'number' || !Array.isArray(grid)) return;

  let c = n-1;
  let r = Math.floor(n/2);

  let r1 = 0;
  let c1 = 0;

  for (let row = r1; row < r; row ++) {
    for (let column = c1; column < c; column ++) {
      // first grid[row][column] to grid[column][n-1-row]
      // then grid[column][n-1-row] to grid[n-1-row][n-1-column]
      // then grid[n-1-row][n-1-column] to grid[n-1-row][column]
      // let temp = grid[row][column];
      // grid[row][column] = grid[n-1-row][column];
      // grid[n-1-row][column] = grid[n-1-row][n-1-column];
      // grid[n-1-row][n-1-column] = grid[column][n-1-row];
      // grid[column][n-1-row] = temp

      let temp = grid[row][column];
      grid[row][column] = grid[n-1-column][row];
      grid[n-1-column][row] = grid[n-1-row][n-1-column];
      grid[n-1-row][n-1-column] = grid[column][n-1-row];
      grid[column][n-1-row] = temp
    }
    c1 ++;
    c --;
  }
  return grid;
}

function tests(){
  let grid =   [ [1, 2, 3], [4, 5, 6], [7, 8, 9]  ];
  console.log(rotateGrid(grid, 3));
};

function rotateGrid2(grid, n) {

  if(typeof n !== 'number' || !Array.isArray(grid)) return;

  let newGrid = [];
  for (let i = 0; i < n; i ++) {
    newGrid.push([]);
  }

  for (let row = 0; row < n; row ++) {
    for (let column = 0; column < n; column ++) {
      newGrid[column][n-1-row] = grid[row][column];
    }
  }
  return newGrid;
}

function tests(){
  let grid =   [ [1, 2, 3], [4, 5, 6], [7, 8, 9]  ];
  console.log(rotateGrid(grid, 3));
  grid =   [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16] ];
  console.log(grid);
  console.log(rotateGrid(grid, 4));
};

//tests();

module.exports = rotateGrid;
