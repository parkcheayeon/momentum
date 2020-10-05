const body = document.querySelector("body");

function changeBackground(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function randomNumber() {
    const number = Math.floor(Math.random() * 5);
    return number;
}

function init() {
    const random = randomNumber();
    changeBackground(random);
}
init();