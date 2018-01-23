/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  //should this return a num or another string?
  let mult = 1;
  let dec = 0;
  for (let i = binary.length-1; i >=0; i--) {
    let digit = parseInt(binary.charAt(i))
    dec += digit * mult;
    mult *= 2;
  }
  return dec;
}

function decToBin(decimal) {
  // don't understand exactly what I'm supposed to do for the bonus
  // does the decimal come in as a string or a num?
  // should I output a string that represents the binary value, or an actual num?
  // if the latter, isn't a num always kinda binary, it just prints out as a decimal by default?
  // like you could convert any number to any base when you're printing it, cuz in memory it's a series of binary bits
  // but outputting a 'binary' vs 'decimal' number is confusing to me. They should all just be nums
  // I'm assuming input should be num and output should be string for this function
  let mult = 1;
  let bin = ''
  while (mult <= decimal) {
    mult *= 2;
  }

  if (mult > 1) {
    mult = mult / 2;
  }

  while (mult >= 1) {
    if (mult <= decimal) {
      decimal -= mult;
      bin += '1';
    } else {
      bin += '0'
    }
    mult = mult / 2;
  }
  return bin;
}

function decToBin2(decimal) {
  // don't understand exactly what I'm supposed to do for the bonus
  // does the decimal come in as a string or a num?
  // should I output a string that represents the binary value, or an actual num?
  // if the latter, isn't a num always kinda binary, it just prints out as a decimal by default?
  // like you could convert any number to any base when you're printing it, cuz in memory it's a series of binary bits
  // but outputting a 'binary' vs 'decimal' number is confusing to me. They should all just be nums
  let mult = 1;
  let bin = 0;
  for (let i = decimal.length-1; i >=0; i--) {
    let digit = parseInt(decimal.charAt(i))
    bin += digit * mult;
    mult *= 10;
  }
  return bin;
}

function decToHex2(decimal) {
  let mult = 1;
  let hex = 0;
  for (let i = decimal.length-1; i >=0; i--) {
    let digit = parseInt(decimal.charAt(i))
    hex += digit * mult;
    mult *= 10;
  }
  return hex;
}

function tests() {
  console.log(binToDec('1001'));
  console.log(binToDec('0'));
  console.log(binToDec('11'));
  console.log(binToDec('100'));
  console.log(binToDec('101'));
  console.log(binToDec('0101'));

  console.log(decToBin2('1001'));
  console.log(decToBin2('0'));
  console.log(decToBin2('11'));
  console.log(decToBin2('100'));
  console.log(decToBin2('101'));
  console.log(decToBin2('0101'));

  console.log(decToHex2('1001'));
  console.log(decToHex2('0'));
  console.log(decToHex2('11'));
  console.log(decToHex2('100'));
  console.log(decToHex2('101'));
  console.log(decToHex2('0101'));

  console.log(decToBin(1001));
  console.log(decToBin(0));
  console.log(decToBin(11));
  console.log(decToBin(100));
  console.log(decToBin(101));

  console.log(decToBin(binToDec('1010')));
  /*
  binToDec('0')   -> 0
   * 	binToDec('11')  -> 3
   * 	binToDec('100') -> 4
   * 	binToDec('101') -> 5
   *  binToDec('0101') -> 5
   */
}
//tests()
module.exports = binToDec;
