/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */
function mergeRanges(array) {

    array.sort(function(a, b) {
      return a[0] - b[0];
    });
    const result = [array[0]];
    for (let i = 1; i < array.length; i += 1) {
      let curr = array[i];
      let last = result[result.length - 1];
      if (curr[0] > last[1]) {
        result.push(curr);
      } else if (curr[1] > last[1]) {
        last[1] = curr[1];
      }
    }
    return result;
  }
  
  var times = [[0, 1], [3, 5], [4, 8], [9, 10], [10, 12]];
  
  console.log(mergeRanges(times));
  
  
  
  function mergeRangesWithReduce(array) {
    const sortedTimes = array.sort((a, b) => a[0] - b[0]);
    const firstTimeSlot = sortedTimes.shift();
  
    return sortedTimes.reduce((merged, currentTimeSlot) => {
      const previousEndTime = merged[merged.length - 1][1];
      if (currentTimeSlot[1] <= previousEndTime) return merged;
      if (currentTimeSlot[0] > previousEndTime) merged.push(currentTimeSlot)
      if (currentTimeSlot[0] <= previousEndTime) merged[merged.length - 1][1] = currentTimeSlot[1];
      return merged;
    }, [firstTimeSlot]);
  }
  
  
  console.table(mergeRangesWithReduce(times),'with reduce');
module.exports = mergeRanges;
