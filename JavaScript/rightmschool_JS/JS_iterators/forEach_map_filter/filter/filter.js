function filterLetters(arr, letter) {
    let array = arr.filter((element) => (element.toLowerCase() === letter));
    return array.length;
}

console.log( filterLetters(["a","a","b","c","A"], "a") );