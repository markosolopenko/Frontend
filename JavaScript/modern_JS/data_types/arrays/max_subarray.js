function getMaxSubSum(arr) {
    let sum = 0;
    let maxNum = 0;
    let maxis = 0;
    for(let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length+1; j++) {
            maxNum = Math.max(maxNum, sum); 
            sum += arr[j];
        }
        maxis = Math.max(maxNum, maxis);
        maxNum = 0;
        sum = 0;
    }

    return maxis;

}