const btn = document.getElementById('search-button');
const inp = document.getElementById('search-input');
const cityName = document.getElementById('city-name');
const cityLocation = document.getElementById('city-loc');
const cityClimate = document.getElementById('city-climate');
const stat = document.getElementById('status');


async function getData(place) {
    stat.innerText = 'Waiting for API...';
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=2efdfe2d339042599c843829241707&q=${place}&aqi=yes`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error: ', error);
        stat.innerText = 'Error fetching data. Please try again.';
    }
}

async function clickHandle() {
    cityName.innerText='';
    cityClimate.innerText='';
    cityLocation.innerText=''
    const data = await getData(inp.value);
    if (data) {
            cityName.innerText = `City Name : ${data.location.name}`;
            cityLocation.innerText = `City Location : ${data.location.region}`;
          
            // Access and display current weather details
            const currentWeather = data.current;
            cityClimate.innerText = `Current Weather:`;
            cityClimate.innerHTML += `<br>Temperature (C): ${currentWeather.temp_c}`;
            cityClimate.innerHTML += `<br>Feels Like (C): ${currentWeather.feelslike_c}`;
            cityClimate.innerHTML += `<br>Wind Speed (mph): ${currentWeather.wind_mph}`;
            cityClimate.innerHTML += `<br>Humidity (%): ${currentWeather.humidity}`;
            cityClimate.innerHTML += `<br>Precipitation (mm): ${currentWeather.precip_mm}`;
            // Add more details as needed based on the response object
          
            stat.innerText = '';
    }
}

