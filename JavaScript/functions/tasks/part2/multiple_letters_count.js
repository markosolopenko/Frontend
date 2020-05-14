function countLetters(string) {
    let dict = {};
    for(let i = 0; i < string.length; i++) {
        if (string[i] in dict) {
            dict[string[i]] = dict[string[i]] + 1; 
        }else {
            dict[string[i]] = 1;
        }
    }
    return dict;
}
countLetters('hello');