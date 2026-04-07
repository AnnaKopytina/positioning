/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/

const modal = document.getElementById("modal");
const btn = document.getElementById("button");
const span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "flex";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

const progressFill = document.querySelector('.progress-fill');
const duration = 3000;
const frameRate = 15;
const totalFrames = duration / frameRate;

let currentFrame = 0;
const timer = setInterval(() => {
    currentFrame++;
    let progressPercent = (currentFrame / totalFrames) * 100;
    if (progressPercent <= 100) {
        progressFill.style.width = progressPercent + "%";
    } else {
        clearInterval(timer);
    }

}, frameRate);