let calculator = {
    read() {
        this.num1 = +prompt('Put a number'),
        this.num2 = +prompt('Put a second number')
    },
    sum() {
        return this.num1+this.num2;
    },
    mul() {
        return this.num1 * this.num2;
    }
}
calculator.read();
alert( calculator.sum() );
alert ( calculator.mul() );