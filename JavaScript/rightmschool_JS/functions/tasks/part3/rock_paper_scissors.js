function rockPaperScissors() {
    let array = ['rock', 'paper', 'scissors'];
    let computerWin = false;
    let playerWin = false;
    let tie = false;
    while(playerWin != true && computerWin != true && tie != true) {
        let ask = prompt("Your choise?");
        let rand = array[Math.floor(Math.random() * array.length)];
        if((ask === 'rock' && rand === 'paper') || (ask == 'paper' && rand === 'scissors') || (ask === 'scissors' && rand === 'rock')){
            computerWin = true;
        }else if((ask === 'rock' && rand === 'scissors') || (ask === 'paper' && rand === 'rock') || (ask === 'scissors' && rand === 'paper')) {
            playerWin = true;
        }else if((ask === 'rock' && rand === 'rock') || (ask === 'scissors' && rand === 'scissors') || (ask === 'paper' && rand ==='paper')) {
            tie = true;
        }
    }
    if(computerWin) {
        return 'Computer win!!!';
    }else if(playerWin) {
        return 'Human win!!!';
    }else if(tie) {
        return 'Tie!!!';
    }
}
rockPaperScissors();