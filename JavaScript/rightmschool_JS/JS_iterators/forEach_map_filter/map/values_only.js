function extractKey(arr, name) {
    let values = arr.map((val) => val[name]);
    return values;
} 


console.log( extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name") );