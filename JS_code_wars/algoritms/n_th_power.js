function modifiedSum(a, n) {
    let sum = 0;
    let power = 0;
    a.forEach(function(item) {
      sum += item;
      power += item**n;
    });
    return power - sum;
}