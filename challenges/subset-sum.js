/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * 
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */
// Sort [2, 3, 4, 7]

function subsetSum(array, target) {
    // let output = [];
    if(array.length === 1 && findArr(array, target) === true){
        return true;
    }else{(findArr(array, target) === false){
        findArr(array, target)
    }
}

function findArr(array, target){
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
          
            if (array[i] + array[j] === target) {
                return true;
            }
            if(array[j] === array.length-1){
                array.splice(j-1, 2, array[j-1] + array[j]);
            }
        }
    }
    return false;
}
console.log(subsetSum([3, 4, 2], 9));

module.exports = subsetSum;
