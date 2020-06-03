function specialMultiply() {
    let sum = 1;
    for(let i = 0; i < arguments.length; i ++) {
            sum *= arguments[i];
    }
    if(arguments.length > 1) { 
        return sum;
    } else {
    return function closure(num) {
        return sum * num;
        }
    }  
}