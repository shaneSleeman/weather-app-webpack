import './style.css';
import data from './data.js';

const urlHalf1 = "http://api.openweathermap.org/data/2.5/weather?q=";
const urlHalf2 = "&APPID=1392939c8de4d48505175baaadda2965";

const content = document.querySelector('.content');

async function getWeather(city) {
    try {
        const response = await fetch(urlHalf1 + city + urlHalf2, {mode: 'cors'});
        const weatherData = await(response.json());
        console.log(weatherData);
        displayWeather(data(weatherData));
    }
    catch(e) {
        displayWeather(null);
    }
}

function displayWeather(weatherData) {
    content.innerHTML = "";

    const search = document.createElement('input');
    content.appendChild(search);
    search.setAttribute("onkeypress", `getWeather(${search.value})`);

    const city = document.createElement('h1');

    if(weatherData === null) {
        city.innerText = "Invalid location!"
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
    }
}

getWeather('san francisco');