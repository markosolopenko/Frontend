function countEvensAndOdds(array) {
    let countOdd = 0;
    let dict = {}
    let countEven = 0;
    for(let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            dict['evenCount'] = countEven += 1
        }else {
            dict['oddCount'] = countOdd += 1
        }
    }
    return dict; 
}
countEvensAndOdds([1,2,3,4,5,6,7]);