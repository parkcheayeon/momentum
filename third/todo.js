const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function handleDeleteBtn(ev) {
    const btn = ev.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function handleSubmit(ev) {
    ev.preventDefault();
    const currentValue = toDoInput.value;
    paintToDos(currentValue);
    toDoInput.value = "";
}

function paintToDos(text) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    btn.innerText = "❌";
    btn.classList.add("btn");
    btn.addEventListener("click", handleDeleteBtn);

    span.innerText = ` ${text}`;
    toDoList.appendChild(li);
    li.appendChild(btn);
    li.appendChild(span);
    li.id = newId;

    const toDosObj = {
        text: text,
        id: newId
    }
    toDos.push(toDosObj);
    saveToDos();
}

function loadToDos() {
    const currentToDos = localStorage.getItem(TODOS_LS);
    if (currentToDos !== null) {
        const parsedToDos = JSON.parse(currentToDos);
        parsedToDos.forEach(toDo => paintToDos(toDo.text));
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
    toDoInput.focus();
}
init();