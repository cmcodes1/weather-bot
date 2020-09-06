require('dotenv').config()

const fetch = require("node-fetch")

const weatherToken = process.env.WEATHER_API_TOKEN

const weatherURL = new URL("https://api.openweathermap.org/data/2.5/weather")

weatherURL.searchParams.set("zip", "263139,in")
weatherURL.searchParams.set("APPID", weatherToken)
weatherURL.searchParams.set("units", "metric")

const getWeatherData = async () => {
    const resp = await fetch(weatherURL.toString())
    const body = await resp.json()
    return body
}

const main = async () => {
    const weatherData = await getWeatherData()
    console.log(weatherData)
}

main()

//645