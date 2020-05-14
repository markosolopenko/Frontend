function lastElement(array) {
    if (array) {
        return array[array.length-1];
    }
    return undefined;
}
lastElement([]);