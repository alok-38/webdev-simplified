// app.js
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    // Ensure APIKEY is defined before using it
    if (!window.APIKEY) {
        console.error("API key is not defined.");
        return;
    }

    const response = await fetch(apiURL + city + `&appid=${window.APIKEY}`);

    if (response.status === 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else {
        let data = await response.json();

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

        // Set weather icon based on weather condition
        setWeatherIcon(data.weather[0].main);

        document.querySelector('.weather').style.display = 'block';
    }
}

function setWeatherIcon(weatherCondition) {
    const weatherIcons = {
        'Clouds': 'images/clouds.png',
        'Clear': 'images/clear.png',
        'Rain': 'images/rain.png',
        'Drizzle': 'images/drizzle.png',
        'Mist': 'images/mist.png'
    };

    const iconURL = weatherIcons[weatherCondition];
    if (iconURL) {
        weatherIcon.src = iconURL;
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});
