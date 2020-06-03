function random(min, max) {
    return min + (max - min) * Math.random();
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max+1 - min+1));
}