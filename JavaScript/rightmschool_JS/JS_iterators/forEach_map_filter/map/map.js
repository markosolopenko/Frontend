function valTimesIndex(arr) {
    arr.map((val, index) => arr[index] = val*=index);
    return arr;
}

console.log( valTimesIndex([5,10,15]) );