// nested setTimeout

function printNumbers(from, to) {

    let current = from;
      
    setTimeout(function some() {
      console.log( current );
      if (current < to) {
        setTimeout(some, 1000);
      }
      current++;
    }, 1000);
}
      
      
      
      
console.log( printNumbers(5, 10) );