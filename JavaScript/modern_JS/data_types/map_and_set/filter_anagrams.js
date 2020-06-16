// function aclean(arr) {
//     let newArr = []; 
//     let arrRes = [];
//     for(let i = 0; i < arr.length; i++) {
//         let s = Array.from(arr[i]).sort().join('').toLowerCase();
//         console.log(s);
//         if(!newArr.includes(s)) {
//             arrRes.push(arr[i]);
//         }
//         newArr.push(s);
//     }
//     return arrRes;
// }   

function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
      // split the word by letters, sort them and join back
      let sorted = word.toLowerCase().split('').sort().join(''); // (*)
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
  }

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) );
