

const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings")


const USER_LS = "name";

const SHOWING_CN = "showing";


function saveName(text) {
    localStorage.setItem(USER_LS, text);
}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintName(currentValue);
    saveName(currentValue);
}


function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}


function paintName(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}


function loadName() {
    const loadedName = localStorage.getItem(USER_LS);
    if (loadedName === null) {
        askForName();
    } else {
        paintName(loadedName);
    }
}


function init() {
    loadName();
}
init();