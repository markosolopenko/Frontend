var checkPerfectNumber = function(num) {
    let divisors = 0;
    if(num > 0) {
        for(let i = 0; i < num; i++) {
            if(num % i === 0) {
                divisors += i;
            }
        }
        if(divisors === num) {
            return true;
        }
        return false;
    }else {
        return false;
    }
};

console.log( checkPerfectNumber(28) );