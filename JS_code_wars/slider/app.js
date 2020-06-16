let widthOfImage = 400;
let position = 0;
let count = 1;

let list = slider.querySelector('ul');
let listElements = slider.querySelectorAll('li');

let a = 3;
document.querySelector('.arrow__right').addEventListener('click', function() {

    position -= widthOfImage + a;
    position = Math.max(position, -widthOfImage * (listElements.length - count));

    list.style.marginLeft = position + 'px';
    a += 1
});

document.querySelector('.arrow__left').addEventListener('click', function() {
    position += widthOfImage;
    position = Math.min(position, 0);

    list.style.marginLeft = position + 'px';
});