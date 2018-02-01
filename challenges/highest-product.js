function highestProduct(array) {
  if (!array.length) return 0;
  if (array.length === 1) return array[0];
  if (array.length === 2) return array[0] * array[1];

  array.sort((a, b) => Math.abs(a) - Math.abs(b));
  const len = array.length;
  const factors = [array[len - 3], array[len - 2], array[len - 1]];
  const numNegatives = factors.reduce((negs, num) => { 
    if (num < 0) return negs + 1;
    return negs; 
  }, 0);
  if (numNegatives === 1) {
    if (array[len - 4]) {
      if (array[len - 4] > 0) factors[factors.findIndex(num => num < 0)] = array[len - 4];
      else factors[factors.findIndex(num => num > 0)] = array[len - 4];
    }
  }
  if (numNegatives === 3) {
    let pos = len - 4;
    while (pos >= 0 && array[pos] < 0) pos--;
    if (pos >= 0) {
      factors[0] = array[pos];
    } else {
      factors[0] = array[0];
      factors[1] = array[1];
      factors[2] = array[2];
    }
  }
  return factors[0] * factors[1] * factors[2];
}
