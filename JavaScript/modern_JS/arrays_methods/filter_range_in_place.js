function filterRangeInPlace(arr, a, b) {
    let indexToDelete = '';
    for(let i = 0; i < arr.length; i++) {
        if(!(arr[i] >= a && arr[i] <= b)) {
            arr.splice(i, 1);
            i --;
        }
    }

    return arr;
}