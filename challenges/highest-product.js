/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (array.length === 3) { return array.reduce(function(a,b){return a*b;})};
    // let filteredArr = array.filter(function(num){return num!== 0}); //num != 0
    let filteredForPositives = array.filter(function(num){return num>0});
    let filteredForNegatives = array.filter(function(num){return num<0});
    let holder = [];
    let positiveSort = filteredForPositives.sort(function(a,b){return b-a}); // in descending order
    let negativesSort = filteredForNegatives.sort(function(a,b){return a-b});; //in ascending 
    if (negativesSort.length === 0) {
        holder.push(positiveSort[0], positiveSort[1], positiveSort[2]);
    }
    if (positiveSort.length === 0) {
        holder.push(negativesSort[0], negativesSort[1], negativesSort[negativesSort.length-1]);
    }

    if (negativesSort.length >= 2) {
        if (positiveSort.length === 0) {
            holder.push(negativesSort[negativesSort.length-1], negativesSort[negativesSort.length-2], negativesSort[negativesSort.length-3]);
        }
        if (negativesSort[0]*negativesSort[1] > positiveSort[0]*positiveSort[1]) {
            holder.push(negativesSort[0], negativesSort[1], positiveSort[0]);
        }
    }
    return holder.reduce(function(a,b){return a*b});
}

  


 


module.exports = highestProduct;
