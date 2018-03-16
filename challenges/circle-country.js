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
  // for each circle, determine if start and end is inside of it  
  const startContainingDistricts = getContainingDistricts(x, y, r, start_x, start_y);
  const endContainingDistricts = getContainingDistricts(x, y, r, end_x, end_y);
  return notIntersect(startContainingDistricts, endContainingDistricts);
}

function notIntersect(a, b) {
  let t;
  if (b.length > a.length) t = b, b = a, a = t;
  return a.filter(function (e) {
      return b.indexOf(e) === -1;
  });
}

function getContainingDistricts(x, y, r, point_x, point_y) {
  const containingDistricts = [];
  for(let i = 0; i < r.length; i++) {
    console.log('Looking at circle', i, 'with center', x[i], ',', y[i], 'Radius is', r[i]);
    console.log('Distance of', point_y, ',', point_y, 'is', distance(x[i], y[i], point_x, point_y))
    // If point is in ith circle, push into containing districts array
    if (distance(x[i], y[i], point_x, point_y) < r[i]) {
      console.log(distance(x[i], y[i], point_x, point_y) < r[i])
      containingDistricts.push(i);
    }  
  }
  console.log(containingDistricts)
  return containingDistricts;
}

function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
console.log(circleCountry([0, 3], [0, 3], [10, 2], 1, 1, 4, 4));

module.exports = circleCountry;
