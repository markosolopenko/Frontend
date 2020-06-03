function Calculator() {
    this.read = function() {
        this.num2 = +prompt("Num1"),
        this.num1 = +prompt("Num2")
    },
    this.sum = function() {
        return this.num1 + this.num2;
    },
    this.mul = function() {
        return this.num1 * this.num2;
    }
}
