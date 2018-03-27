// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
  let [x, y] = str.match(/\d+/g);
  [x, y] = [+x, +y];

  if (x > 4) x = -(x - 9);
  if (y > 4) y = -(y - 9);

  [x, y] = [+x, +y].sort();

  if (x > 2) return 8;
  if (x === 2) return y > 2 ? 6 : 4;
  if (y === 2) return 3;
  if (y === 1) return 2;
  return 4;
}

function knightjumps(str) {
  const startX = parseInt(str[1]);
  const startY = parseInt(str[3]);

  if (isNaN(startX) || isNaN(startY)) return undefined;

  let knightMoves = 0;

  function checkY() {
    if (startY + 1 <= 8) knightMoves++;
    if (startY - 1 > 0) knightMoves++;
  }

  function checkX() {
    if (startX + 1 <= 8) knightMoves++;
    if (startX - 1 > 0) knightMoves++;
  }

  if (startX + 2 <= 8) {
    checkY();
  }
  if (startX - 2 > 0) {
    checkY();
  }
  if (startY + 2 <= 8) {
    checkX();
  }
  if (startY - 2 > 0) {
    checkX();
  }

  return knightMoves;
}

module.exports = knightjumps;
