// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  for (let j = array.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (array[i] > array[i + 1]) {
        let tmp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = tmp;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
