const cityForm = document.querySelector("form")
const card = document.getElementById("img")
const details = document.querySelector(".details")

const updateUI = (data) => {
    const cityDets = data.cityDets
    const weather = data.weather


    details.innerHTML =  `
    <p id="city_name">${cityDets.EnglishName}</p>
    <p id="weather_condition">${weather.WeatherText}</p>
    <p id="temp">${weather.Temperature.Metric.Value}</p>
    `
}

const updateCity = async (city) => {

    const cityDets = await getCity(city)
    const weather = await getWeather(cityDets.Key)

    return { cityDets, weather }

}

cityForm.addEventListener("submit", e => {
    e.preventDefault();

    const city = cityForm.city.value.trim()

    cityForm.reset()
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err))
})