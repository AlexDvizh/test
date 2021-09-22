const crystalElement = document.querySelector('.crystal');
const contentElement = crystalElement.querySelector('.crystal__content');

let intervalId;
let initialWindowHeight;
let initialWindowWidth;

window.addEventListener('load', onLoad);
window.addEventListener('unload', onUnload);
window.addEventListener('resize', onResize);
crystalElement.addEventListener('mouseover', onMouseEnter);
crystalElement.addEventListener('mouseout', onMouseLeave);

function onLoad() {
    startCounter();
    intervalId = setInterval(startCounter, 7000);
    initialWindowHeight = window.innerHeight;
    initialWindowWidth = window.innerWidth;
}

function onUnload() {
    clearInterval(intervalId);
}

function onResize() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    let ratio;

    if (windowHeight !== initialWindowHeight) {
        ratio = (windowHeight / initialWindowHeight).toFixed(2);
    }
    if (windowWidth !== initialWindowWidth) {
        ratio = (windowWidth / initialWindowWidth).toFixed(2);
    }
    resizeElement(ratio);
}

function onMouseEnter() {
    document.body.classList.toggle('bg-blue');
}

function onMouseLeave() {
    document.body.classList.toggle('bg-blue');
}

function startCounter() {
    updateText('1');

    setTimeout(() => {
        updateText('2');
    }, 1000);

    setTimeout(() => {
        updateText('3');
    }, 2000);

    setTimeout(() => {
        updateText('Go!');
    }, 3000);
}

function updateText(text) {
    contentElement.textContent = text;
}

function resizeElement(ratio) {
    crystalElement.style.transform = 'scale(' + ratio + ')';
}