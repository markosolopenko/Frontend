function filterKey(arr, key) {
    let obj = arr.filter(function(element) {
        return (element[key] && element['isInstructor']);
    });
    return obj;
}

console.log( filterKey([{name: "Elie", isInstructor:true, isHilarious: false},{name: "Tim", isInstructor:true, isHilarious: true},{name: "Matt", isInstructor:true}], "isHilarious") );