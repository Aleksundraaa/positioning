/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
const progressFill = document.querySelector('.progress-fill');

let currentProgress = 0;
const duration = 3000;
const updateTime = 20;
const steps = duration / updateTime;
const incProcent = 100 / steps;

const timer = setInterval(() => {
    currentProgress += incProcent;
    progressFill.style.width = `${currentProgress}%`;

    if (currentProgress >= 100) {
        progressFill.style.width = `100%`;
        clearInterval(timer);
    }
}, updateTime);