board(8, 8);

function board(dimmensionX, dimmensionY) {
    let square = "";
    for (let counter0 = 0; counter0 < dimmensionY; counter0++) {
        if (counter0 % 2) {
            for (let counter1 = 0; counter1 < dimmensionX; counter1++){
                if (counter1 % 2) {
                    square += " ";
                } else {
                    square += "#";
                }
            }
            square += "\n"
        } else {
            for (let counter2 = 0; counter2 < dimmensionX; counter2++) {
                if (counter2 % 2) {
                    square += "#";
                } else {
                    square += " ";
                }
            }
            square += "\n"
        }
    }
    console.log(square);
}
