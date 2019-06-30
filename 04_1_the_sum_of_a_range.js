function range(a, b, step = 1) {
    let numbers = [];
    
    if (step > 0) {
        for (let i = 0; a + i <= b; i += step) numbers.push(a + i);
    }   else { 
        for (let i = 0; a + i >= b; i += step) numbers.push(a + i);
    }
    return numbers;
}

function sum(array) {
    let sum = 0;
    for(let number of array) sum += number;
    return sum;
}

console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55