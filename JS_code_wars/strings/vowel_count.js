function getCount(string) {
    let vowelsCount = 0;
    let vowels = 'aouie';
    for(let i = 0; i < string.length; i++) {
        if(vowels.includes(string[i])) {
            vowelsCount += 1;
        }
    }

    return vowelsCount;
} 