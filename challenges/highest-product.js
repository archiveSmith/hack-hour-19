/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct (array) {

    function compareNums (a, b) {
        return a-b;
    }
    let result = array.sort(compareNums).reverse();
    return (result[0]*result[1]*result[2]);
    
    }
    highestProduct(array);
    


module.exports = highestProduct;
