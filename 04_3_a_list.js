function arrayToList(array) {
    let reversed = array.reverse(); 
    let list = {};
    for (let element of reversed) {
        list.value = element;
        list.rest = list;
    }
    return list;
}




console.log(1,2,3);