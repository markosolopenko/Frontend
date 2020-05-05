let namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing"
}
for(let key in namesAndHobbies) {
    console.log(namesAndHobbies[key] + '>=' + key)
}
namesAndHobbies.name = "Marko";
namesAndHobbies.hobbi = "improve my self";

if ('name' in namesAndHobbies) {
    console.log('Yes name exist in ' + namesAndHobbies);
}
