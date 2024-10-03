const result = document.getElementById('weatherResult');

// getting search button from html and adding event listener for click, when user clicks we get the value of form and giving it to getWeather function
document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        getWeather(city);
    }
});

// using asying fucntion and fetching data from openweather api
async function getWeather(city) {
    const apiKey = "038e45e1170c1161db236f50c6162dba"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// using try and catch to catch errors, we fatch data from the url written above and if city was not found we throw an error "city not found"
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');

        const data = await response.json();
        displayWeather(data);
// getting the weather result div from html document and changing its inner html to red error message if city was not found
    } catch (error) {                                       //giving the rror 
        result.innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
}
// creating a function for weather display wich changes the inner html of result div
function displayWeather(data) {
    result.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity} %</p>
    `;
}
