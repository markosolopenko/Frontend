function map(array, callback) {
    for(let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }
    return array;
}
map([1,2,3,4], function(val) {
    return val * 2;
}); 