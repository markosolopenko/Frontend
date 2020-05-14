function arrayManipulation(array, command, location, value) {
    if(command === 'remove' && location === 'end') {
        return array.pop();
    }else if(command === 'remove' && location === 'beginning') {
        return array.shift();
    }else if(command === 'add' && location === 'beginning') {
        array.unshift(value);
        return array;
    }else if(command === 'add' && location === 'end') {
        array.push(value);
        return array;
    }
}
arrayManipulation([1, 2, 3], 'add', 'end', 20);