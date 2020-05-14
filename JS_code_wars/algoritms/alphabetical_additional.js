function addLetters(...letters) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let x = 0;
    if(letters.length === 0) {
      return 'z';
    }else {
      for(let i = 0; i < letters.length; i++) {
        for(let j = 0; j < alphabet.length; j++) {
          if(alphabet[j] === letters[i]) {
            x += j+1;
            break;
          }
        }
      }
      while (x-1 > 25) {
        x -= 26
      }
      return alphabet[x-1];
    }
  }