/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

const modal = document.getElementById('window');
const overlay = document.getElementById('overlay');
const btn = document.getElementById('open-modal');
const close = document.querySelector('.close');

btn.onclick = function() {
    modal.style.display = 'block';
    overlay.style.display = 'block';
};

close.onclick = function() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
};

overlay.onclick = function() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
};
