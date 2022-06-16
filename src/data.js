const data = (weatherData) => {
    const name = weatherData.name;
    const country = weatherData.sys.country;
    const temp = weatherData.main.temp;
    const feels = weatherData.main.feels_like;
    const humidity = weatherData.main.humidity;
    const max = weatherData.main.temp_max;
    const min = weatherData.main.temp_min;
    const wind = weatherData.wind.speed;
    const sunrise = weatherData.sys.sunrise;
    const sunset = weatherData.sys.sunset;
    const condition = weatherData.weather.description;
    return {name};
}

export default data;