let user = {
    name: "John Smith",
    age: 35
};

//  to JSON
let json = JSON.stringify(user);
console.log( typeof JSON.stringify(user) );


// to object

console.log( typeof JSON.parse(json) );