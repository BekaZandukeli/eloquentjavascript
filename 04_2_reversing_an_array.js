function reverseArray (array) {
	let newArray = [];
  	for (let entry of array) {
    newArray.unshift(entry)
    }
  return newArray;
}
function reverseArrayInPlace (array) {
	for (let i = 0; i < Math.floor(array.length / 2); i++) {
		const a = array[i];
		const z = array[array.length - 1 - i];
        array[array.length - 1 - i] = a;
        array[i] = z;
	}
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]