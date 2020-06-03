function hangman() {

    let wordsForGame = ['дедлайн', 'речене́ць', 'меню', 
        'стравопис', 'лайк', 'вподобайка', 'равлик'];

    let randoWord = wordsForGame[Math.floor(Math.random() * wordsForGame.length)];
    let hiddenWord = [];
    for(let i = 0; i < randoWord.length; i++) {
        hiddenWord.push('_');
    }
    let chanchesToMistake = 5;
    let goodChance = 0;
    let usedLetters = '';
    while(chanchesToMistake > 0) {
        if(goodChance >= randoWord.length) {
            break;
        }
        let userLetter = prompt('Input letter!');
        if(usedLetters.includes(userLetter)) {
            alert('You used this letter don`t forget abount it!!!');
        }else if(userLetter.length > 1 || userLetter.length < 1) {
            alert('Syntax error!!!');
        }else if(randoWord.includes(userLetter)) {
            goodChance += 1;
            for(let i = 0; i < randoWord.length; i++) {
                if(randoWord[i] === userLetter) {
                    hiddenWord[i] = userLetter;
                }
            }
            alert( 'Nice good try!!' );
            alert( `Leave little bit ${hiddenWord}` ); 
        }else {
            alert( 'Nothing finded' );
            chanchesToMistake -= 1;
            alert( `You still have ${chanchesToMistake} chanses` );
        }
    }

    if(!hiddenWord.includes("*")) {
        alert( 'My greeting you Win!!! ' )
        return hiddenWord.join(' ');
    }else {
       alert( 'You lose!!!' );
       alert( 'Sorry but not this time!!!' );
    }
        
}

hangman();


