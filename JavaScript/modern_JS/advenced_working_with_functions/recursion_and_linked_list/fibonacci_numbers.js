function fib(n) {
    if(n <= 1) {
        return n;
    }else {
        return fib(n-1) + fib(n-2);
    }
}



// Faster code to find fibonacci sequnces 
function fib1(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
}

console.log( fib1(3) );
console.log( fib1(7) );
console.log( fib1(77) );