function every(array, test) {
    let count = array.length;
    for(let element of array) {
        if(test(element) === true) count--;
    }
    if(count === 0) return true;
    else return false;
  }
  
  
  
  console.log(every([1, 2, 3, 4, 5, 6, 7], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true