function addKeyAndValue(arr, isInstructor, bol) {
    arr.reduce(function(accumulator, currentValue) {
        return currentValue[isInstructor] = bol;
    }, 0);

    return arr;

}

console.log( addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true) );