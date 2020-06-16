function camelize(str) {
    str = str.split('-');
    for(let i = 1; i < str.length;  i++) {
        str[i] = str[i].replace(str[i].charAt(0), str[i].charAt(0).toUpperCase());
    }
    str = str.join('');
    return str;
}   

function camelize(str) {
    return str.split('-')
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}