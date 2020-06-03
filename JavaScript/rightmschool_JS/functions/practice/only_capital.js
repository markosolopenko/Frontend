function onlyCapitalLetters(some_string) {
    let string_capital = '';
    for(let i = 0; i < some_string.length; i++) {
        if(some_string[i] === some_string[i].toUpperCase()) {
            string_capital += some_string[i];
        }
    }
    if(string_capital) {
        return string_capital
    }
    return '';
}
onlyCapitalLetters('Amaizing');



(function displayFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
})("Marko", "Solopenko");


function createCalculator() {
    return {
        add: function(par1, par2) {
            return par1 + par2;
        },
        substract: function(par1, par2) {
            return par1 - par2;
        },
        multiply: function(par1, par2) {
            return par1 * par2;
        },
        divide: function(par1, par2) {
            return par1 / par2;
        }
    }
} 
let calc = createCalculator();
calc.add(20, 20);