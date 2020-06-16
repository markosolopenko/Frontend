function filterLetters(arr, letter) {
    let newArr = [];
    arr.reduce(function(start, next) {
        if(next.toLowerCase() === letter) {
            newArr.push(next);
        }
    }, 0);

    return newArr.length;
}

console.log( filterLetters(["a","a","b","c","A"], "a") );