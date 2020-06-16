function sumSalaries(salaries) {
    if(salaries) {
        let sum = 0; 
        for(let val of Object.values(salaries)) {
            sum += val;
        }
        return sum;
    }else {
        return 0;
    }
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log( sumSalaries(salaries) );