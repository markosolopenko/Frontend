function topSalary(salaries) {
    if(salaries) {
        let maxName = '';
        let max = 0;
        for(let [k, v] of Object.entries(salaries)) {
            if(max < v) {
                max = v;
                maxName = k;
            }
        }
        return `max salari ${max} is in ${maxName}`;
    }else {
        return null;
    }
}


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};


console.log( topSalary(salaries) );


