let daysOfWeek = {
    '1': 'Sunday',
    '2': 'Monday',
    '3': 'Tuesday',
    '4': 'Wednesday',
    '5': 'Thursday',
    '6': 'Friday',
    '7': 'Saturday'
};
function printDay(num) {
    if(num < 1 && num > 7) {
        return undefined;
    }
    else {
        return daysOfWeek[num.toString()];
    }
}
printDay(1);