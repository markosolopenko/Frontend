function solve(a,b) {
    let s = '';
    let k = '';
    for(let i = 0; i < a.length; i++) {
        for(let j = 0; j < b.length; j++) {
            if(a[i] === b[j]) {
            k = 'None'; 
            }
        }
        if(k === 'None') {
            k = '';
        } else {
            s += a[i];
        }
    }
    let p = '';
    for(let l = 0; l < b.length; l++) {
        for(let v = 0; v < a.length; v++) {
            if(b[l] === a[v]) {
                p = 'None'; 
            }
        }
        if(p === 'None') {
            p = '';
        } else {
            s += b[l];
        }
    }
    return s;
}