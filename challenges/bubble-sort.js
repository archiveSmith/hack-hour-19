// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {

  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length-j; i++) {
      if (array[i] > array[i + 1]) {
        const bigger = array[i];
        array[i] = array[i+1];
        array[i+1] = bigger;
      }
    }
  }

  return array;
}

module.exports = bubbleSort;
