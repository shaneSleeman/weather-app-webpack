import './style.css';
import data from './data.js';

const body = document.querySelector('body');

const urlHalf1 = "https://api.openweathermap.org/data/2.5/weather?q=";
const urlHalf2 = "&APPID=1392939c8de4d48505175baaadda2965";

const content = document.querySelector('.content');

async function getWeather(city) {
    try {
        const response = await fetch(urlHalf1 + city + urlHalf2, {mode: 'cors'});
        const weatherData = await(response.json());
        displayWeather(data(weatherData));
    }
    catch(e) {
        displayWeather("error");
    }
}

function displayWeather(weatherData) {
    content.innerHTML = "";

    const searchbar = document.createElement("div");
    searchbar.classList.toggle("searchbar");
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
    searchbar.appendChild(search);
    searchbar.appendChild(searchButton);
    content.appendChild(searchbar);

    const city = document.createElement('div');
    city.style.fontSize = "1.5rem";
    city.style.fontWeight = "600";

    if(weatherData === "error") {
        city.innerText = "Invalid location!";
        city.style.textAlign = "center";
        content.appendChild(city);
    }

    else {
        const topbar = document.createElement("div");

        city.innerText = `${weatherData.name}, ${weatherData.country}`;

        const condition = document.createElement('div');
        condition.innerText = weatherData.condition;
        condition.style.textTransform = "capitalize";
        const citytext = document.createElement("div");
        citytext.classList.add("citytext");
        citytext.appendChild(city);
        citytext.appendChild(condition);
        topbar.appendChild(citytext);

        const temps = document.createElement('div');
        temps.classList.add('temps');
        const temp = document.createElement('div');
        temp.classList.toggle("temp");
        temp.innerText = `${Math.round(weatherData.temp - 273)}°C`;
        const minmax = document.createElement('div')
        minmax.classList.add('minmax');
        const max = document.createElement('div');
        max.innerText = `Max: ${Math.round(weatherData.max - 273)}°C`;
        const min = document.createElement('div');
        min.innerText = `Min: ${Math.round(weatherData.min - 273)}°C`;
        minmax.appendChild(max);
        minmax.appendChild(min);
        temps.appendChild(temp);
        temps.appendChild(minmax);

        topbar.appendChild(temps);
        topbar.classList.toggle("topbar");
        content.appendChild(topbar);

        const humidityline = document.createElement("div");
        humidityline.classList.add("humidityline");
        const humidityLineText = document.createElement("div");
        humidityLineText.innerText = "Humidity:";
        humidityLineText.style.fontSize = "1.5rem";
        humidityLineText.style.fontWeight = "600";
        const humidity = document.createElement('div');
        humidity.innerText = `${weatherData.humidity}%`;
        humidity.style.fontSize = "1.5rem";
        humidityline.appendChild(humidityLineText);
        humidityline.appendChild(humidity);
        content.appendChild(humidityline);

        const windline = document.createElement("div");
        windline.classList.add("humidityline");
        const windLineText = document.createElement("div");
        windLineText.innerText = "Wind Speed:";
        windLineText.style.fontSize = "1.5rem";
        windLineText.style.fontWeight = "600";
        const windspeed = document.createElement('div');
        windspeed.innerText = `${Math.round((weatherData.wind * 3.6) * 10) / 10}kph`;
        windspeed.style.fontSize = "1.5rem";
        windline.appendChild(windLineText);
        windline.appendChild(windspeed);
        content.appendChild(windline);
    }
}

getWeather('sydney');