function vowelCount(string) {
    let vowel = 'aouie';
    let obj = {};
    for (let element of string) {
        if(vowel.includes(element) && !(element in obj)) {
            obj[element] = 1;
        }else if(vowel.includes(element) && element in obj) {
            obj[element] = obj[element] + 1;
        }
    }
    return obj;
}


function removeVowels(string) {
    let vowel = 'aouie';
    let vow = [];
    for (let i of string.split('')) {
        if(vowel.includes(i)) {
            string = string.replace(i, '');
        }else {
            vow.push(i);
        }
    }
    return vow;
}

console.log( removeVowels( 'fun' ));
// console.log( vowelCount('awesome') );
