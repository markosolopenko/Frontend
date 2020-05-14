let orderedCount = function (text) {
    let arr = [];
    let count = 1;
    let s = [];
    for(let i = 0; i < text.length; i++) { 
      for(let j = 1; j < text.length; j++) { 
        if(text[j] === text[i]) {
          count += 1;
        }
      }
      if(s.includes(text[i])) {
        count = 0;
      }else {
        s.push(text[i]);
        arr.push([text[i], count]);
        count = 0;
      }
    }
    return arr;
  }