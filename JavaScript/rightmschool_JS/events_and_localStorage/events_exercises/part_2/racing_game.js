let carMarko = document.querySelector('.first__car');
let carIvan = document.querySelector('.second__car');
let button = document.querySelector('button');
carMarko.style.marginLeft = 0;
carIvan.style.marginLeft = 0;

function reset(a, b) {
    clearInterval(a.timer);
    clearInterval(b.timer);
    a.style.marginLeft = 0;
    b.style.marginLeft = 0;
}


button.addEventListener('click', function() {
    carMarko.timer = setInterval(function() {
        carMarko.style.marginLeft = parseInt(carMarko.style.marginLeft) + Math.random()*60 + 'px';
        if(parseInt(carMarko.style.marginLeft) > window.innerWidth) {
            alert(carMarko.innerHTML + " " + 'Wins!!!');
            reset(carMarko, carIvan);
        }
    }, 60);
    carIvan.timer = setInterval(function() {
        carIvan.style.marginLeft = parseInt(carIvan.style.marginLeft) + Math.random()*60 + 'px';
        if(parseInt(carIvan.style.marginLeft) > window.innerWidth) {
            alert(carIvan.innerHTML + ' ' + 'Wins!!!');
            reset(carMarko, carIvan);
        }
    }, 60);
});

