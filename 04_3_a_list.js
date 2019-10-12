function arrayToList(array) {
	let list = null;
  	for (i = array.length - 1; i >= 0; i--) {
    	list = {value: array[i], rest: list};
    }
	return list;
}

function listToArray(list) {
	let array = [];
  	while (true) {
  		array.push(list.value);
  		if (list.rest == null) break;
      	list = list.rest;
    }
	return array;
}

function prepend(a, list) {
	list = {value: a, rest: list};
  	return list;
}

function nth(list, num) {
  	let value;
	for (let i = 0; i <= num - 1; i++) {
      if (list == null) return undefined;
      value = list.value;
      list = list.rest;
    }
  	return value;
}   
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 2));
// → 20