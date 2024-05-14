// Function to fetch weather data from an API
async function fetchWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}

// Function to display weather information
function displayWeather(weather) {
  const weatherInfoDiv = document.getElementById("weatherInfo");
  weatherInfoDiv.innerHTML = `
        <p>Current temperature: ${weather.main.temp}°C</p>
        <p>Weather conditions: ${weather.weather[0].description}</p>
    `;
}

// Function to handle user input and fetch weather data
async function handleUserInput() {
  const cityInput = document.getElementById("cityInput");
  const city = cityInput.value.trim();
  if (!city) return; // User cancelled or provided no input

  try {
    const weatherData = await fetchWeatherData(city);
    displayWeather(weatherData);
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
  }
}
