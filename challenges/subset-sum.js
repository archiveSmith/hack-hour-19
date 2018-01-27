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
    let allSets = [];

    function createSubSet(arr) {
      if (array.length === 0) return;
      else {
        let value = array.shift();
        let cloneSets = [...allSets];
        allSets.push([value]);
        cloneSets.forEach(sets => {
          sets.push(value);
        });
        allSets.concat(cloneSets);
        return createSubSet(array);
      }
    }

  createSubSet(array);

  return allSets;
  }

 //helper function for populating an array of subset
 // function populate(array, value) {
 //   let tempArr = array;
 //
 //   for (let i = 0; i < array.length; i++) {
 //     tempArr[i].push(value);
 //   }
 //   return tempArr;
 // }
 //
 //  // helper function for reduce
 //  function addSum (acc, value) {
 //    return acc + value;
 //  }



console.log(subsetSum([2, 3, 4, 7], 5));
module.exports = subsetSum;
