function deepEqual(x, y) {
    
	if (typeof x == "object" && typeof y == "object") {  // თუ ობიექტებია ვაგრძელებთ, თუ არა, წავედით 26-ე ხაზზე.
        if (Object.keys(x).length !== Object.keys(y).length) return false; 
        // ზემოთ სიგრძეების ტოლობა მნიშვნელოვანია, რადგან თუ ერთ-ერთი ობიექტის ელემენტები მეორე ობიექტის 
        // ელემენტების ქვესიმრავლე იქნება და counter-ს 22-ე ხაზზე ამ პატარა ობიექტს შევადარებთ შეცდომით true-ს დაგვიბრუნდება. 
        else { 
                let counter = 0;
                // ქვემოთ ყოველ x-ის property name-ს ვადარებ ყველა y-ისას.
                for (let propertyX of Object.keys(x)) {
                    for (let propertyY of Object.keys(y)) {
                        // თუ რომელიმე ორი property name ერთმანეთს დაემთხვა და მათგან არც ერთი არაა 
                        // ობიექტი მაშინ ვადარებთ მათ value-ებს და ტოლობის შემთხვევაში counter++.
                        // სხვა შემთხვევაში გადავდივართ მე-18 ხაზზე და ვლოცულობთ, რომ იმუშაოს >_<
                        if (propertyX == propertyY) {
                            if (typeof x[propertyX] !== "object" && typeof y[propertyY] !== "object") {
                                if (x[propertyX] == y[propertyY]) counter++;
                            } else if (deepEqual(x[propertyX], y[propertyY])) counter++; /* <------ დიიახ! დიიახ! დიიაააახ!!! ეს რეკურსიააა! ^_^  */  
                        } 
                    }
                }    
            if (counter == Object.keys(x).length) return true;
            else return false;
        }    
    }
    return x == y; 
}

let obj = {here: {is: "an"}, object: 2};




console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(1, 2));
// → false
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {object: 2, here: {is: "an"}}));
// → true
console.log(deepEqual({object: 2, "შარზევარ": {here: {is: "an"}}}, {"შარზევარ": {here: {is: "an"}}, object: 2}));
// → true
console.log(deepEqual(["ტორტი", 15, 27], ["ტორტი", 15, 27]));
// → true
console.log(deepEqual(["ბადრიჯანი", 15, 27], ["ტორტი", 15, 27]));
// → false