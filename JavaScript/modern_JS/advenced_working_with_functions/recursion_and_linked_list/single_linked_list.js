function printList(list) {
    if(list === null) {
        return list;
    }else {
        console.log(list.value)
        return printList(list.next);
    } 
}

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

console.log( printList(list) );