function makeXOGrid(row, column) {
    let matrix = [];
    let arr = [];
    let symbol = 'X';
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < column; j++) {
            if(symbol === 'X') {
                arr.push(symbol);
                symbol = 'O';
            } else if(symbol == 'O') {
                arr.push(symbol);
                symbol = 'X';
            }
        }
        matrix.push(arr);
        arr = [];
    }
    return matrix;
}
makeXOGrid(1, 4);