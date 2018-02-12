/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2) {
    let a1p = 0,  //array 1 pointer
        a2p = 0;
    
    const length1 = arr1.length,
          length2 = arr2.length,
          combArr = [];
    
    while(a1p < length1 || a2p < length2) {
        if(arr1[a1p] < arr2[a2p]) {
            const value = arr1[a1p];
            combArr.push(value);
            a1p++;
        } 
        else if (arr2[a2p] < arr1[a1p]) {
            const value = arr2[a2p];
            combArr.push(value);
            a2p++;  
        }
    }
    
    if (a1p === length1) { // in case where arr2 has elements left
        const remainArr2 = arr2.slice(a2p);
        combArr.concat(remainArr2);
    } else if (a2p === length2) {
        const remainArr1 = arr1.slice(a1p);
        combArr.concat(remainArr1); 
    }

    return combArr;
}

var my_array = [3, 4, 6, 10, 11, 15, 21];
var another_array = [1, 5, 8, 12, 14, 19];
const result = mergeArrays(my_array, another_array); //-> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
console.log(result);

module.exports = mergeArrays;
