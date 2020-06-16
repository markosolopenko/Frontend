function printFirstAndLast(arr) {
    arr.forEach(element => {
        console.log( element[0] + element[element.length-1]); 
    });
}

let arr = ['awesome','example','of','forEach'];

printFirstAndLast(arr);