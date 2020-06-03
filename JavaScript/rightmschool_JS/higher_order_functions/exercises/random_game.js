function randomGame(count) {
    let num = setInterval(function() { 
        let s = getRandomInt(2);
        count++;
        if(s > .75) {
            clearInterval(num);
            console.log(count);
        }
    }, 1000);
}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}