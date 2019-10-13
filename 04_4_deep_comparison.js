function deepEqual(x, y) {
    if (typeof x == "object" && typeof y == "object") {
        if (Object.keys(x).length !== Object.keys(y).length) return false; 
        else { 
                let counter = 0;
                for (let propertyX of Object.keys(x)) {
                    for (let propertyY of Object.keys(y)) {
                        if (propertyX == propertyY) {
                            if (typeof x[propertyX] !== "object" && typeof y[propertyY] !== "object") {
                                if (x[propertyX] == y[propertyY]) counter++;
                            } else if (deepEqual(x[propertyX], y[propertyY])) counter++;  
                        } 
                    }
                }    
            if (counter == Object.keys(x).length) return true;
            else return false;
        }    
    }
    return x == y; 
}