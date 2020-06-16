function getSecondsToTomorrow() {
    let d = new Date();
    let seconds = d.getMinutes()*60 + d.getHours()*3600 + d.getSeconds(); 
    return 24*3600 - seconds;
}

console.log( getSecondsToTomorrow() );