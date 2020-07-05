class Animation {
    constructor(selector) {
        this.selector = document.querySelector(selector);
    }
    fadeOut(time, toggle) {
        if(toggle && this.selector.classList.contains('fadeOut__active')) {
            this.selector.style.opacity = 1;
            this.selector.classList.remove('fadeOut__active');
        }else {
            this.selector.style.transition = `all ${time}s ease`;
            this.selector.style.opacity = 0;
            this.selector.classList.add('fadeOut__active');
        }
        
    }
}

let todo = new Animation('h1');

const button = document.querySelector('button');

button.addEventListener('click', () => todo.fadeOut(1, false));