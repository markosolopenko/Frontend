function extractKey(arr, name) {
    let newArr = [];
    arr.reduce(function(accumulator, currentValue) {
        newArr.push(currentValue[name]);
    }, 0);


    return newArr;
}

console.log( extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name") );