function reapitingString(stringA, stringB) {
    let b = Math.floor(stringB.length / stringA.length) + 1;
    b += 2;

    for(let i = 1; i < b; i++) {
        let stringIn = stringA;
        for(let j = 1; j < i; j++) {
            stringIn += stringA;
        }

        if(stringIn.includes(stringB)) {
            return i;
        }
    }

    return -1;
}

console.log( reapitingString('abcd', 'cdabcdab') );