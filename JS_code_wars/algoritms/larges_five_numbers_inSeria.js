function solution(digits){
    let arr_string = []
    for(let i = 0; i < String(digits).length-4; i++) {
      arr_string.push(String(digits).slice(i, i+5));
    }
    return +(Math.max(...arr_string));
  }