// take elements
const picture = document.querySelector('.picture');
const bigPicture = document.querySelector('.big__picture');
const gold = document.querySelector('.gold__picture');
const messages = document.querySelector('.cold__or__hot');
const span = document.querySelector('span');

let count = 0;
let randomPosition = function(size) {
    return Math.floor(Math.random() * size);
}
let goldCoordinates = {
    x: randomPosition(800),
    y: randomPosition(800)
};

gold.style.left = goldCoordinates.x + picture.clientWidth - 800 + 10 - gold.clientWidth / 2 + 'px';
gold.style.top = goldCoordinates.y  + picture.clientHeight - 800 + 10 - gold.clientHeight / 2 + 'px';
gold.style.display = 'none';

// eventsListenerb
picture.addEventListener('click', function(event) {
    count += 1;
    span.style.opacity = 0;
    let diff = getCoords(event);
    if(diff >= 0 && diff <= 20) {
        gold.style.display = 'block';
        alert(`Nice you Winn!!! You wasted ${count} tries`);
        messages.innerHTML = 'Winner!!!';
    }else {
        gold.style.display = 'none'; 
        if(diff <= 100) {
            messages.innerHTML = 'Hot!!!';
        }else {
            messages.innerHTML = 'Cold!!!';
        }
        alert(`Gold ${diff} km in some side!!!`);
    }
    
});

// functions
function getCoords(event) {
    let diffX = event.offsetX - goldCoordinates.x; 
    let diffY = event.offsetY - goldCoordinates.y;
    return Math.floor(Math.sqrt((diffX*diffX) + (diffY*diffY))); 
}