function readNumber() {
    let num;
    do {
        num = +prompt('Input valid num');
    }while(isNaN(num)) {
        if(num === '' || num === null) {
            return null;
        }
    }

    return num;
    
}