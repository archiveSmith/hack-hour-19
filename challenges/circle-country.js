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

function circleCountry(xArr, yArr, rArr, start_x, start_y, end_x, end_y) {
  // Loop over circles and find if start_x,y and end_x,y are inside or outside each circle
  // The difference in inside/ouside totals should be the fewest borders crossed
  const startStats = [];
  const endStats = [];

  // Use pythagorean theroem for each circle find inside/outside status for each point
  xArr.forEach((x, i) => {
    const startXDiff = Math.pow(x - start_x, 2);
    const startYDiff = Math.pow(yArr[i] - start_y, 2);
    const startDist = Math.sqrt(startXDiff + startYDiff);
    if (startDist < rArr[i]) startStats.push(true);
    else startStats.push(false);

    const endXDiff = Math.pow(x - end_x, 2);
    const endYDiff = Math.pow(yArr[i] - end_y, 2);
    const endDist = Math.sqrt(endXDiff + endYDiff);
    if (endDist < rArr[i]) endStats.push(true);
    else endStats.push(false);
  });

  return startStats.reduce((acc, val, i) => {
    if (val !== endStats[i]) acc++;
    return acc;
  }, 0);
}

module.exports = circleCountry;
