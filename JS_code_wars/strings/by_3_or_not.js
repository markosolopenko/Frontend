function divisibleByThree(str){
    let sum = 0;
    for(let i of str) {
      sum += Number(i);
    }
    if(sum % 3 === 0) {
      return true;
    }
    return false;
}