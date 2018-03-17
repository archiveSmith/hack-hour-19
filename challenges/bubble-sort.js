// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  if (!Array.isArray(array)) return;
  for (let i = 0; i < array.length; i ++) {
    let noChange = true;
    for (let j = 0; j < array.length - 1 - i; j ++) {
      if (array[j] > array[j+1]) {
        noChange = false;
        const temp = array[j+1];
        array[j+1] = array[j];
        array[j] = temp;
      }
    }
    // if (noChange) break; // possible efficiency raiser
  }
  return array;
}

function tests() {
  console.log(bubbleSort([3, 6, 334, 7, 6567, 5, -23]));
}

//tests();

module.exports = bubbleSort;
