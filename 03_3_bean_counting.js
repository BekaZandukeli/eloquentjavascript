// Bean Counting
function countBs(a) {
  	let counter = 0;
	for (let entry of a) {
      	if (entry == "B") counter += 1;
    }
  	return counter;
}

function countChar(a, b) {
  	let counter = 0;
	for (let entry of a) {
      	if (entry == b) counter += 1;
    }
  	return counter;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
