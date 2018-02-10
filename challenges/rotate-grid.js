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

// i is sample grid and the number of arrays/dimension
// 

function rotateGrid(grid, n) {
    let outerArr = [];
    let innerArr = [];
    
    for (let m = 0; m<n; m++) {
        for(let i = n; i>0; i--) {
            innerArr.push(grid[i-1][m]);
        }
        outerArr.push(innerArr);
        innerArr = [];
    }
    return outerArr;
    }

module.exports = rotateGrid;
