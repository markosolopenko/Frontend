function getNiceNames(people){
    let res = [];
    for(let i = 0; i < people.length; i++) {
        if(Object.values(people[i])[1] === true) {
            res.push(Object.values(people[i])[0])
        }
    }
    return res;
}


function getNaughtyNames(people){
    let res = [];
    for(let i = 0; i < people.length; i++) {
        if(Object.values(people[i])[1] === false) {
            res.push(Object.values(people[i])[0])
        }
    }
    return res;
}