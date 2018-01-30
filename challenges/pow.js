/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

// will only calculate a positive power
function pow(base, power) {
    let sum = base;
    power = (power < 0)? 0 : power;
    if (power === 0) return 1;
    function powFunc (base, power) {
        if (power === 1) return sum;
        sum = base * sum;
        power--;
        return powFunc (base, power);
    }
    return powFunc (base, power);
}
module.exports = pow;
