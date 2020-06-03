function createCounter() {
    let count = 0;
    return function increase() { 
        return ++count;
    }
}