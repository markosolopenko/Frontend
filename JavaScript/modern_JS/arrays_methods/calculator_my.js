function Calculator() {

    this.operators = {
        '+': (a, b) => a + b, 
        '-': (a, b) => a - b
    };
    
    this.calculate = function(str) {

        str = str.split(' '),
        num1 = +str[0], 
        operator = str[1], 
        num2 = +str[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.operators[operator](num1, num2); 
    
    };
    this.addMethod = function(name, func) {
        this.operators[name] = func;
    }
}

let calc = new Calculator;
console.log(calc.calculate('2 - 3'));

let powerCalc = new Calculator;

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b)

let result = powerCalc.calculate("12 / 3");
console.log( result );







