function rotate(array, spaces) {
    let newArr = [];
    for(let i = 0; i < array.length; i++) {
        newArr.push(1);
    }
    let rot = 0;
    for(let i = 0; i < array.length; i++) {
        rot = spaces+i;
        if(rot > array.length - 1) {
            newArr[spaces - (array.length-i)] = array[i]; 
        }else {
            newArr[i + spaces] = array[i];
        }
    }

    return newArr;
}
rotate([1, 2, 3], 3);