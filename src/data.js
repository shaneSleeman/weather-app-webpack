const data = (weatherData) => {
    const name = weatherData.name;
    const country = weatherData.sys.country;
    const temp = weatherData.main.temp;
    const max = weatherData.main.temp_max;
    const min = weatherData.main.temp_min;
    const condition = weatherData.weather[0].description;
    const humidity = weatherData.main.humidity;
    const wind = weatherData.wind.speed;
    return {name, country, temp, max, min, condition, humidity, wind};
}

export default data;