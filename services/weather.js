import fetch from "node-fetch";

export const getWeatherData = async (location) => {
    const API_KEY = process.env.WEATHER_API_KEY;

    if (!API_KEY) {
        throw new Error(
            "Please define the WEATHER_API_KEY environment variable. Get your key at https://www.weatherapi.com/",
        );
    }

    const res = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&aqi=yes`,
    );
    return res.json();
}
