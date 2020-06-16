function extractCurrencyValue(str) {
    let money = '1234567890';
    let m = '';
    for(let char of str) {
        if(money.includes(char)) {
            m += char;
        }
    }
    return +m;
}