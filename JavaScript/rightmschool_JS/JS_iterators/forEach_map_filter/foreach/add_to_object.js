function addKeyAndValue(arr, key, value) {
    arr.forEach(element => {
        element[key] = value;
    });
    return arr;
}

let arr = [{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}];


console.log( addKeyAndValue(arr, "isInstructor", true) );