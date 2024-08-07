const apiKey = 'a61a03cf1d423c4c8835a5227f8faa58'; // Your API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('searchButton').addEventListener('click', function() {
    const city = document.getElementById('locationInput').value;
    fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            document.getElementById('location').innerText = data.name;
            document.getElementById('temperature').innerText = `${data.main.temp} °C`;
            document.getElementById('description').innerText = data.weather[0].description;
        })
        .catch(error => console.error('Error fetching the weather data:', error));
});


const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';

function getForecast(city) {
    fetch(`${forecastUrl}?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Process and display forecast data
        })
        .catch(error => console.error('Error fetching the forecast data:', error));
}

