let arr = [52, 11, 2, -100, 8];
function sortDecrease(arr) {
    for(let i = 0; i < arr.length; i++) {
        d = i
        while(d > 0 && arr[d] > arr[d-1]) {
            let some = arr[d];
            arr[d] = arr[d-1];
            arr[d-1] = some; 
            d -= 1;
        }
    }
    return arr;
}

