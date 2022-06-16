import './style.css';
import data from './data.js';

const urlHalf1 = "http://api.openweathermap.org/data/2.5/weather?q=";
const urlHalf2 = "&APPID=1392939c8de4d48505175baaadda2965";

const content = document.querySelector('.content');

const test = document.createElement('h1');
test.innerText = 'test';
content.appendChild(test);

async function getWeather(city) {
    try {
        const response = await fetch(urlHalf1 + city + urlHalf2, {mode: 'cors'});
        const weatherData = await(response.json());
        console.log(weatherData);
    }
    catch(e) {
        
    }
}

getWeather('london');