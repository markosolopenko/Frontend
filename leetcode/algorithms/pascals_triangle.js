var generate = function(numRows) {
    let t = []
    for(let i = 1; i <= numRows; i++) {
        let l = []
        for(let j = 1; j <= i; j++) {
            if (j == 1 || j == i) {
                l.push(1);
            }else {
                let x = Math.abs(j-i-1)
                let y = Math.abs(j-i)
                l.push(t[t.length-1][t[t.length-1].length - x] + t[t.length-1][t[t.length-1].length - y]);
            }
                
        }
        t.push(l)
    }
    return t;
};