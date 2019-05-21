let number = 0;

for (let counter = 0; counter < 100; counter++) {
    number++;
    if (number % 3 == 0 && number % 5 == 0 ) {
        console.log("FizzBuzz");
        continue;
    } else if (number % 3 == 0) {
        console.log("Fizz");
        continue;
    } else if (number % 5 == 0) {
        console.log("Buzz");
        continue;
    } else {
        console.log(number);
    }
}
