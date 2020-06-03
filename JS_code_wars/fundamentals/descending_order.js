function descendingOrder(n) {
    let reversedString = '';
    n = n.toString();
    n = Array.from(n).sort();
    for(let i = n.length-1; i >= 0; i--) {
        reversedString += n[i];
    }
    return +reversedString;
}