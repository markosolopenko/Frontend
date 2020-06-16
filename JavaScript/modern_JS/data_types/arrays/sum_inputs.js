function sumInput() {
    let arr = [];
    let sum = 0;
    while(true) {
        let num = prompt("Number");
        if(num === '' || num === null || !isFinite(num)) break; 
        arr.push(+num);
        sum += +(num);
    }

    return sum;
    
}