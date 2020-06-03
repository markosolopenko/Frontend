let meProfile = {
    firstName: "Marko",
    lastName: "Solopenko",
    occupation: "student" 
};
console.log(meProfile.firstName);
console.log(meProfile['lastName']);
console.log(meProfile.occupation);
meProfile.hobbi = 'upgrade_My_Self';

delete meProfile.occupation;
console.log(meProfile.occupation);