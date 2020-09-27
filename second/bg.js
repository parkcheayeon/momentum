const body = document.querySelector("body");

const BG_CN = "bgImage";

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add(BG_CN);
    body.appendChild(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * 5);
    return number;
}

function init() {
    const random = genRandom();
    paintImage(random);
}
init();