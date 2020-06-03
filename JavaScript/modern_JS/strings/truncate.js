function truncate(str, maxLength) {
    if(str.length > maxLength) {
        str = str.replace(str.substr(maxLength, str.length), '...');
        return str;
    }
    return str;
}