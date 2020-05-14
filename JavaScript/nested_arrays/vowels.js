function countVowels() {
    var nestedArr = [
        "Elie",
        ["Matt", ["Tim"]],
        ["Colt", ["Whisky", ["Janey"], "Tom"]],
        "Lorien"
    ];
    let count = 0;
    for(let i = 0; i < nestedArr.length; i++) {
        if(Array.isArray(nestedArr[i])) {

            for(let j = 0; j < nestedArr[i].length; j++) {
                if(Array.isArray(nestedArr[i][j])) {

                    for(let l = 0; l < nestedArr[i][j].length; l++) {
                        if(Array.isArray(nestedArr[i][j][l])) {

                            for(let k = 0; k < nestedArr[i][j][l].length; k++) {
                                count += loop(nestedArr[i][j][l][k]);
                            }

                        } else {
                            count += loop(nestedArr[i][j][l]);
                        }

                    }
                } else {
                    count += loop(nestedArr[i][j])
                }
            }
        } else {
            count += loop(nestedArr[i])
        }
    }

    return count;
}

    
function loop(string) {
    let count = 0;


    for(let i = 0; i < string.length; i++) {
        if(    string[i].toLowerCase() === 'a' 
            || string[i].toLowerCase() === 'e' 
            || string[i].toLowerCase() === 'u' 
            || string[i].toLowerCase() === 'o' 
            || string[i].toLowerCase() === 'i') {
                count += 1;
        }
    }

    return count;

}
countVowels();