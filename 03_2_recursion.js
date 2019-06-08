// Recursion

function isEven(a) {
	if (a < 0) a *= -1
  	if (a == 0) return true;
  	else if (a == 1) return false;
  	else return isEven(a-2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
