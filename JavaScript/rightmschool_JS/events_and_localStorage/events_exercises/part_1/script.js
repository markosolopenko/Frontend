document.addEventListener('DOMContentLoaded', function() {
    let changeHeading = document.getElementById('change_heading');
    changeHeading.textContent = 'Hello World!';
    changeHeading.addEventListener('mouseover', function() {
        changeHeading.style.color = 'red';

        setTimeout(function() {
            changeHeading.style.color = ''; 
        }, 400);
    });
    
    let brownDiv = document.querySelector('.brown');
    brownDiv.addEventListener('mouseover',  function(event) {
        event.target.style.backgroundColor = 'aqua';


        setTimeout(function() {
            event.target.style.backgroundColor = '';
        }, 400);
    }, false);
});


let newDiv = document.createElement('div');
newDiv.className = 'purple';
newDiv.style.background = 'purple';

let section = document.querySelector('section');

section.append(newDiv);