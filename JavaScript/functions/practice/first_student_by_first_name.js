students = [{'firstName': "Tim", 'seconName': "Garcia"}, {'firstName': "Elie", 'seconName': "Kulak"}, {'firstName': "Liza", 'seconName': "Lupa"}];
function findStudentByFirstName(string) {
    for(let i = 0; i < students.length; i++) {
        if (students[i]['firstName'].toLowerCase() === string.toLowerCase()) {
            return true
        } 
    }    
    return false
}
findStudentByFirstName('elie');