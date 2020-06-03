function isPalindrome(string) {
    let len = string.length-1;
    string = string.toLowerCase();
    console.log(string);
    for(let i = 0; i < string.length; i++) {
        if(string[i] != string[len]){
            return false;
        }else {
            len -= 1;
        }
    }
    return true;
}
isPalindrome('testing');