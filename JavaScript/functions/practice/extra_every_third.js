function extractEveryThird(array) {
    let everyThird = [];
    let third = 1;
    for(let i = 0; i < array.length; i++) {
        if (third === 3) {
            everyThird.push(array[i]);
            third = 0;
        }
        third += 1;
    }
    return everyThird;
}
extractEveryThird(["a","b","c","d"]);