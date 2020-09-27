const weather = document.querySelector(".js-weather");

const COORDS_LS = "coords"

const API_KEY = "5725baca61bf3cbb177a1433a234dc60";


function getWeather(lat, lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function (response) {
        return response.json();
    }).then(function (json) {
        const temp = json.main.temp;
        const position = json.name;
        weather.innerText = `${temp}@${position}`;
    })
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS_LS, JSON.stringify(coordsObj));
}

function getGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function getGeoError() {
    console.log("Can't access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(getGeoSuccess, getGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS_LS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        const lat = parsedCoords.latitude;
        const lng = parsedCoords.longitude;
        getWeather(lat, lng);
    }
}

function init() {
    loadCoords();
}
init();