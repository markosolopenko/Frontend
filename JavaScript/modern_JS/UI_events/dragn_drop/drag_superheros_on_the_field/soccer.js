let heros = document.querySelectorAll('.draggable');


for(let hero of heros) {
    hero.onmousedown = function(event) {
        hero.style.position = 'absolute';
        event.preventDefault();

        let shiftX = event.clientX - hero.getBoundingClientRect().left;
        let shiftY = event.clientY - hero.getBoundingClientRect().top;


        // add eventListeners 
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);


        // functions 
        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseuo', onMouseUp);
        }

        function onMouseMove(event) {
            let newX = event.clientX - shiftX;
            let newY = event.clientY - shiftY;

            console.log(newX)

            if(newY >= document.documentElement.getBoundingClientRect().height + hero.clientHeight-20) {
                newY = document.documentElement.getBoundingClientRect().height + hero.clientHeight - 20;
            }else if (newY <= 0) {
                newY = 0;
            }else if(newX >= document.body.clientWidth - hero.clientWidth) {
                newX = document.body.clientWidth - hero.clientWidth;
            }else if(newX <= 0) {
                newX = 0;
            }

            hero.style.left = newX + 'px';
            hero.style.top = newY + 'px';
        };

        hero.ondragstart = function() {
            return false;
        };
    }
}