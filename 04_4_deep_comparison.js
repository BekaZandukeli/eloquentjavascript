
/* 

    მას შემდეგ, რაც აღმოვაჩინე, რომ ეს პროგრამა 
    მხოლოდ ობიექტების პირველ წევრებს ადარებდა და ამის საფუძველზე
    აბრუნებდა ბულის მნიშვნელობებს(true/false), თავის მოკვლის გარდა, მისი გაfix-ვა მომინდა :d

    გეგმა:          1.იზომება Object.keys(x) და Object.keys(y) სიგრძეები, შედარდება და თუ ერთიდაიგივეა ვაგრძელებთ.
                    2.დეკლარირდება counter-ი, სადაც დაითვლება ობიექტების 
                      ერთი და იგივე property-ების მნიშვნელობების ტოლობების შემთხვევათა რაოდენობა.
                    3.თუ counter == Object.keys(x).length მაშინ true, თუ არა და ქე იცით რაც xD

    მიზანია რაც იყო ის შემდარებელი სისტემა დარჩეს, ხელახლა უფრო ადვილად კი დავწერდი, მაგრამ, პრინციპის ამბავია -_- :d                
    
*/

function deepEqual(x, y) {
    
	if (typeof x == "object" && typeof y == "object") {  // თუ ობიექტებია ვაგრძელებთ, თუ არა, წავედით 40-ე ხაზზე.
        if (Object.keys(x).length !== Object.keys(y).length) return false; // ამით შესაძლოა რესურსი დაიზოგოს.
        else { 
                let counter = 0;
                // ყოველ x-ის property name-ს ვადარებ ყველა y-ისას.
                for (let propertyX of Object.keys(x)) {
                    for (let propertyY of Object.keys(y)) {
                        // თუ რომელიმე ორი property name ერთმანეთს დაემთხვა და მათგან არც ერთი არაა 
                        // ობიექტი მაშინ ვადარებთ მათ value-ებს და ტოლობის შემთხვევაში counter++.
                        // სხვა შემთხვევაში გადავდივართ 32 ხაზზე და ვლოცულობთ, რომ იმუშაოს >_<
                        if (propertyX == propertyY) {
                            if (typeof x[propertyX] !== "object" && typeof y[propertyY] !== "object") {
                                if (x[propertyX] == y[propertyY]) counter++;
                                debugger;
                            } else if (deepEqual(x[propertyX], y[propertyY])) counter++; /* <------ დიიახ! დიიახ! დიიაააახ!!! ეს რეკურსიააა! ^_^  */  
                        } 
                    }
                }
            // და აი დადგა გადამწყვეტი მომენტი...    
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
console.log(deepEqual("რამე", "რამე"));
// → true
console.log(deepEqual("რამე", "რუმე"));
// → false
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {object: 2, here: {is: "an"}}));
// → true

console.log(deepEqual({object: 2, sharzeVar: {here: {is: "an"}}}, {sharzeVar: {here: {is: "an"}}, object: 2}));
// → true