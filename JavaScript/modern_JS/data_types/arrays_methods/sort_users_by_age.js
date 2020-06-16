function sortByAge(users) {
    return users.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); 
    var nameB = b.name.toUpperCase();
    if(nameA < nameB) {
        return -1;
    }
    if(nameA > nameB) {
        return 1;
    }
    return 0;
    });
}


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

console.log(sortByAge(arr));
console.log(arr);
console.log(arr[0].name);
console.log(arr[1]);
console.log(arr[2]);
