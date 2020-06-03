let n = 100;
let array = []; 
let count = 0;
for(let i = 2; i <= n; i++) {
    count = 0;
    for(let j = 1; j <= i; j++) {
        if (i % j === 0) {
            count += 1;
        }
    }
    if (count === 2) {
        array.push(i);
    }
}
alert(array);