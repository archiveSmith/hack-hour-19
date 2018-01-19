/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, prod = 1) {
    if (power === 0) return prod;
    if (power>0) {
        return pow(base, power - 1, prod*base);
    }
    if (power<0) {
        return pow(base, power + 1, prod/base);
    }
}

module.exports = pow;
