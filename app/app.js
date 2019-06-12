const OPENWEATHERMAP_KEY = "6cde01e2336f513754db7a16ff1e64b2"
const DARKSKY_KEY = "5a6789f3b8ebde46c88dc987e44df41f"

let openweathermap_data = null
let darksky_data = null
let weatherunderground_data = null

function fetchOpenWeatherMap() {
    fetch("https://api.openweathermap.org/data/2.5/weather?id=5368361&appid=" + OPENWEATHERMAP_KEY)
        .then((response) => {
            return response.json()
        }).then((json) => {
            document.getElementById("openweathermap-tempfield").innerHTML = (json.main.temp-273) + " °C"
        })
}

function fetchDarkSky() {
    fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + DARKSKY_KEY + "/34.048523,-118.246137")
        .then((response) => {
            return response.json()
        }).then((json) => {
            document.getElementById("darksky-tempfield").innerHTML = ((json.currently.temperature-32)/1.8) + " °C"
        })
}

function start() {
    fetchOpenWeatherMap()
    fetchDarkSky()
}