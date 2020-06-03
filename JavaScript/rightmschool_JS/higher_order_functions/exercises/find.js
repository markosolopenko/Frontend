function find(array, callback) {
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            return array[i];
        }
    }
} 

// find index 
function findIndex(array, callback) {
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            return i;
        }
    }
}