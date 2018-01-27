/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  let nums = array.slice();
  nums = nums.sort();
  let min = 0;
  let max = 0;
  for (num of nums) {
    if (num < 0) {
      min += num;
    } else {
      max += num;
    }
  }

  min = min * -1;
  console.log(min);
  // console.log(max);

  let sums = [];
  let indices = [];
  //sums.fill(false);
  sums[0+min] = true;;
  indices.push(0+min);



  for (num of nums) {
    let newIndices = [];
    for (index of indices) {
      //console.log('index', index);
      let x = index + num;
      //console.log(x);
      if (!sums[x]) {
        newIndices.push(x);
      }
    }
    for (newIndex of newIndices) {
      sums[newIndex] = true;
      indices.push(newIndex);
    }
  }

  //console.log(sums);
  console.log(sums);
  if(sums[target+min]) {
    return true;
  } else {
    return false;
  }
}

function tests() {
  console.log(subsetSum([3, 7, 4, 2], 5)) // true, 3 + 2 = 5
  console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)) // true, 3 + 12 + 5 + 12 = 32
  console.log(subsetSum([8, 2, 4, 12], 13)) // false
  console.log(subsetSum([8, -2, 1, -3], 6)) // true, 8 + 1 + (-3) = 6
  console.log(subsetSum([-56, 3, 5, 17, 29, 13, -43, 2, 9, 9, 9, 10, 1 ], -25));
}

//tests();

module.exports = subsetSum;
