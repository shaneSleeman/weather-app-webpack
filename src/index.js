import './style.css';
import data from './data.js';

const body = document.querySelector('body');

const urlHalf1 = "http://api.openweathermap.org/data/2.5/weather?q=";
const urlHalf2 = "&APPID=1392939c8de4d48505175baaadda2965";

const content = document.querySelector('.content');

async function getWeather(city) {
    try {
        const response = await fetch(urlHalf1 + city + urlHalf2, {mode: 'cors'});
        const weatherData = await(response.json());
        console.log(weatherData);
        displayWeather(data(weatherData));
        //body.style.backgroundImage = ;
        getBackground(city);
    }
    catch(e) {
        displayWeather("error");
    }
}

async function getBackground(city, background) {
    let query = "https://api.giphy.com/v1/gifs/translate?api_key=feH9t26ujFrmuUNAQoTxDS5O6M8ne897&s=";
    try {
        const response = await fetch(query + city, {mode: 'cors'});
        const responseData = await response.json();
        background.src = responseData.data.images.original.url;
    }
    catch(e) {

    }
}

function displayWeather(weatherData) {
    content.innerHTML = "";

    const search = document.createElement('input');
    search.setAttribute("placeholder", "Sydney");
    const searchButton = document.createElement('button');
    searchButton.innerText = "Search";
    searchButton.addEventListener("click", () => {
        getWeather(search.value);
    });
    search.addEventListener("keypress", (e) => {
        if(e.keyCode == 13) getWeather(search.value);
    });
    content.appendChild(search);
    content.appendChild(searchButton);

    const city = document.createElement('h1');

    if(weatherData === "error") {
        city.innerText = "Invalid location!"
        content.appendChild(city);
    }

    else {
        city.innerText = `${weatherData.name}, ${weatherData.country}`;
        content.appendChild(city);

        const condition = document.createElement('div');
        condition.innerText = weatherData.condition;
        content.appendChild(condition);

        const temps = document.createElement('div');
        temps.classList.add('temps');
        const temp = document.createElement('div');
        temp.innerText = weatherData.temp;
        const minmax = document.createElement('div')
        minmax.classList.add('minmax');
        const max = document.createElement('div');
        max.innerText = `Max: ${weatherData.max}`;
        const min = document.createElement('div');
        min.innerText = `Min: ${weatherData.min}`;
        minmax.appendChild(max);
        minmax.appendChild(min);
        temps.appendChild(temp);
        temps.appendChild(minmax);
        content.appendChild(temps);

        const humidity = document.createElement('div');
        humidity.innerText = weatherData.humidity;
        const wind = document.createElement('div');
        wind.innerText = weatherData.wind;
        content.appendChild(humidity);
        content.appendChild(wind);

        const background = document.createElement("img");
        background.style.height = "20vh";
        background.style.width = "auto";
        getBackground(weatherData.condition, background);
        content.appendChild(background);
    }
}

getWeather('sydney');