function findShort(string) {
    let min = string.length;
    string = string.split(' ');
    for(let i = 0; i < string.length; i++) {
        min = Math.min(min, string[i].length)
    }

    return min;

}