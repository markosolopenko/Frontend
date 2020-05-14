function singleLetterCount(word, letter) {
    let count = 0;
    for(let i = 0; i < word.length; i++) {
        if(letter.toLowerCase() === word[i].toLowerCase()) {
            count += 1;
        }
    }
    return count
}
singleLetterCount('amaizing', 'A');