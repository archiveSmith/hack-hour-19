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

function romanNumeral(n, string="") {
	
	if(n<=0){
		return string; 
	}
	let roman = string;

	if((n/1000)>=1){
		roman+="M";
		n-=1000; 
		return romanNumeral(n, roman);
	}
	if((n/900)==1){
		roman+="CM";
		n-=900;
		return romanNumeral(n, roman);
	}
	if((n/500)>=1){
		roman+="D";
		n-=500;
		return romanNumeral(n, roman);
	}
	if((n/400)==1){
		roman+="CD";
		n-=400;
		return romanNumeral(n, roman);
	}
	if((n/100)>=1){
		roman+="C";
		n-=100;
		return romanNumeral(n, roman);
	}
	if((n/90)==1){
		roman+="XC";
		n-=90;
		return romanNumeral(n, roman);
	}
	if((n/50)>=1){
		roman+="L";
		n-=50;
		return romanNumeral(n, roman);
	}
	if((n/40)==1){
		roman+="XL";
		n-=40;
		return romanNumeral(n, roman);
	}
	if((n/10)>=1){
		roman+="X";
		n-=10; 
		return romanNumeral(n, roman);
	}
	if((n/9)==1){
		roman+="IX";
		n-=9;
		return romanNumeral(n, roman);
	}
	if((n/5)>=1){
		roman+="V";
		n-=5; 
		return romanNumeral(n, roman);
	}
	if((n/4)==1){
		roman+="IV";
		n-=4; 
		return romanNumeral(n, roman);
	}
	else{
		roman+="I";
		n-=1; 
		return romanNumeral(n, roman); 
	}
}

module.exports = romanNumeral;
