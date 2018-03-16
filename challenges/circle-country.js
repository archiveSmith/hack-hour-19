/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */

function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  let crossed = 0;
  for (let i = 0; i < x.length; i ++) {
    let cross = false;
    cross = cross ^ (isInCircle(x[i], y[i], r[i], start_x, start_y));
    cross = cross ^ (isInCircle(x[i], y[i], r[i], end_x, end_y));
    crossed += cross;
  }
  return crossed;
}

function isInCircle(center_x, center_y, r, x, y) {
  const x_squared = Math.pow((center_x - x), 2);
  const y_squared = Math.pow((center_y - y), 2);
  return (x_squared + y_squared <= Math.pow(r, 2));
}

function tests() {
  console.log(isInCircle(5, 5, 5, 5, 10));
  console.log(isInCircle(5, 5, 5, 0, 5));
  console.log(isInCircle(5, 5, 5, 5, 0));
  console.log(isInCircle(5, 5, 5, 10, 5));

  console.log(isInCircle(5, 5, 5, 2, 1));
  console.log(isInCircle(5, 5, 5, 1, 2));
  console.log(isInCircle(5, 5, 5, 8, 9));
  console.log(isInCircle(5, 5, 5, 8, 1));

  console.log(isInCircle(5, 4, 3, 5, 1));
  console.log(isInCircle(5, 4, 3, 5, 0));

  let x = [100, 100, 100, 4, 3, 50];
  let y = [100, 100, 100, 0, 2, 50];
  let r = [1, 20, 1000, 5, 10, 50];



  console.log(circleCountry(x, y, r, 0, 0, 100, 100));
  console.log(circleCountry(x, y, r, 100, 100, 0, 0));


}

//tests();

module.exports = circleCountry;
