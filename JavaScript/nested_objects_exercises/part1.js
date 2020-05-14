var nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: ["chips", "fruit", "crackers"],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      },
      addSnack: function(snack){
          this.snacks.push(snack);
          return this;
      }
    }
}
// console log all primes
let primeNumArray = nestedData.innerData.numberData.primeNumbers;
for(let primeNum = 0; primeNum < primeNumArray.length; primeNum++) {
    console.log(primeNumArray[primeNum]);
}


// all even numbers in fibonnaci array
let fibonnaciAraay = nestedData.innerData.numberData.fibonnaci;
for(let fibNumIndx = 0; fibNumIndx < fibonnaciAraay.length; fibNumIndx++) {
    if(fibonnaciAraay[fibNumIndx] % 2 == 0) {
        console.log(fibonnaciAraay[fibNumIndx]);
    }
}


// 'second' item in array 
let secondItem = nestedData.innerData.order;
console.log(secondItem[1]);


// invoke addStack function
nestedData.innerData.addSnack("Chocolate")