// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
    let result = [];
    if (array.length === 0) {
        return result.reverse();
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                array[i] = array[i + 1];
            }
            let val = array.pop();
            result.push(val);
            return bubbleSort(array)
        }
    }
}

module.exports = bubbleSort;
