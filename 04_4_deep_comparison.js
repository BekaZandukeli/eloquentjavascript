
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
    
	if (typeof x == "object" && typeof y == "object") {
    
        let counter = 0;

    	for (let propertyX of Object.keys(x)) {

        	for (let propertyY of Object.keys(y)) {

                if ((propertyX == propertyY) && (typeof x[propertyX] !== "object" && typeof y[propertyY] !== "object")) {
                   
                    if (x[propertyX] == y[propertyY]) {
                       
                        counter++;
                   
                    }
               
                } 
                
                else return deepEqual(x[propertyX], y[propertyY]);   /* <------ დიიახ! დიიახ! დიიაააახ!!! ეს რეკურსიააა :****  */   
                       	
            }

        }

    }

    return x == y; 

}

let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true