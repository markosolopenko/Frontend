function sumOfElements() { 
    let nestedArr = [[1, 2, 3], [4, 5, 6], [7, 8], [9, 10, 11, 12]];
    let sum = 0;


    for(let i = 0; i < nestedArr.length; i++) {
        for(let j = 0; j < nestedArr[i].length; j++) {
            sum += nestedArr[i][j];
        }
    }

    return sum;

}
sumOfElements();