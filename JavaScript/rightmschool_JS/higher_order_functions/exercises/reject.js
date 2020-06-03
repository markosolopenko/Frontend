function reject(array, callback) {
    let task = [];
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            continue;
        }
        task.push(array[i])
    }
    return task;
}
reject([1,2,3,4], function(val){
    return val > 2;
});