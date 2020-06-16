// function printLinkedListReverse(list) {
//     list = reverse(list);
//     while(list) {
//         console.log(list.value);
//         list = list.next;
//     }
//     return list;
// }
// function reverse(list) {
//     prev = null;
//     current = list;
//     while(current != null) {
//         next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//     list = prev;
//     }
//     return list;
// }
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

// console.log( printLinkedListReverse(list) );


function printReverseList(list) {

    if (list.next) {
        printReverseList(list.next);
    }
  
    console.log(list.value);
}
  
console.log( printReverseList(list) );