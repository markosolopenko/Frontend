function rewardOrNot(s) {
    if(s.split('A').length - 1 > 1) {
        return false;
    }else {
        let all = [];
        let count = 0;
        for(let char of s) {
            if(char === 'L') {
                count += 1;
            }else {
                all.push(count);
                count = 0;
            }
        }
        all.push(count);
        if(Math.max(...all) > 2) {
            return false;
        }
        return true;
    }
}

console.log( rewardOrNot('LALL') );