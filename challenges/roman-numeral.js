/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
    let str = '';
    let numHolder = n;
    if (numHolder/1000 >= 1) {
        let numOfM = Math.floor(n/1000);
        let m = 'M'.repeat(numOfM);
        str+=m;
        numHolder-=(1000*numOfM);
    }
    if (numHolder/900>=1) {
        let numOfCM = Math.floor(numHolder/900);
        let cm = 'CM'.repeat(numOfCM);
        str+=cm;
        numHolder-=(900*numOfCM);
    }
    if (numHolder/500>=1) {
        let numOfD = Math.floor(numHolder/500);
        let d = 'D'.repeat(numOfD);
        str+=d;
        numHolder-=(500*numOfD);
    }
    if (numHolder/400>=1) {
        let numOfCD = Math.floor(numHolder/400);
        let cd = 'CD'.repeat(numOfCD);
        str+=cd;
        numHolder-=(400*numOfCD);
    }
    if (numHolder/100>=1) {
        let numOfC = Math.floor(numHolder/100);
        let c = 'C'.repeat(numOfC);
        str+=c;
        numHolder-=(100*numOfC);
    }
    if (numHolder/90>=1) {
        let numOfXC = Math.floor(numHolder/90);
        let xc = 'XC'.repeat(numOfXC);
        str+=xc;
        numHolder-=(90*numOfXC);
    }
    if (numHolder/50>=1) {
        let numOfL = Math.floor(numHolder/50);
        let l = 'L'.repeat(numOfL);
        str+=l;
        numHolder-=(50*numOfL);
    }
    if (numHolder/40>=1) {
        let numOfXL = Math.floor(numHolder/40);
        let xl = 'XL'.repeat(numOfXL);
        str+=xl;
        numHolder-=(40*numOfXL);
    }
    if (numHolder/10>=1) {
        let numOfX = Math.floor(numHolder/10);
        let x = 'X'.repeat(numOfX);
        str+=x;
        numHolder-=(10*numOfX);
    }
    if (numHolder/5>=1) {
        let numOfV = Math.floor(numHolder/5);
        let v = 'V'.repeat(numOfV);
        str+=v;
        numHolder-=(5*numOfV);
    }
    if (numHolder/4>=1) {
        let numOfIV = Math.floor(numHolder/4);
        let iv = 'IV'.repeat(numOfIV);
        str+=iv;
        numHolder-=(4*numOfIV);
    }
    if (numHolder/1>=1) {
        let numOfI = Math.floor(numHolder/1);
        let i = 'I'.repeat(numOfI);
        str+=i;
        numHolder-=(1*numOfI);
    }
    return str;
}

module.exports = romanNumeral;
