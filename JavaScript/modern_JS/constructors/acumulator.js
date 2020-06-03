function Accumulator(inital) {
    this.value = inital;
    this.read = function() {
        this.value += +prompt('Num');
    }
}