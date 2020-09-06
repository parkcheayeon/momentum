

const body = document.querySelector("body");

const IMG_NUMBER = 5;

const BG_CN = "bgImage"


function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add(BG_CN);
    body.appendChild(image);
}

function getRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}
init()