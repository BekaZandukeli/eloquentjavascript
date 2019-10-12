
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
                
                else return deepEqual(x[propertyX], y[propertyY]);   /* <------ დიიახ! დიიახ! დიიაააახ!!! ეს რეკურსიააა :****         მგონი :/          */   
                       	
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