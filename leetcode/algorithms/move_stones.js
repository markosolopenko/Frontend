function moveStones(a, b, c) {
    let stones = [a, b, c];
    stones.sort((x, y) => x-y);
    let x = stones[0], y = stones[1], z = stones[2];

    if(z-y === 1 && y-x == 1) {
        return [0, 0];
    }else {
        let maxTurns = 0;
        let minTurns = 0;
        maxTurns = z - x - 2;
        if(y-x > 2 && z-y > 2) {
            minTurns = 2;
        }else {
            minTurns = 1;
        }
        return [minTurns, maxTurns];
    }

}


console.log( moveStones(2, 10, 3) );