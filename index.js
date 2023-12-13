import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import * as fs from 'fs';

const app = express();
const port = 3000;
var apiKey = "";
fs.readFile("./private/key.json", "utf8", (error, data) => {
    if (error) {
        console.log(error);
        return;
    }
    apiKey = JSON.parse(data).apiKey;
});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/getweather", async (req, res) => {
    try {
        var cityName = req.body["city-name"];
        var countryCode = req.body["country-code"];

        const geoResult = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${countryCode}&limit=1&appid=${apiKey}`);
        const lat = geoResult.data[0]["lat"];
        const lon = geoResult.data[0]["lon"];
        cityName = geoResult.data[0]["name"];
        countryCode = geoResult.data[0]["country"];

        const weatherResult = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
        const weatherID = weatherResult.data.weather[0]["id"];
        const temperature = weatherResult.data.main["temp"];
        const humidity = weatherResult.data.main["humidity"];
        const windSpeed = weatherResult.data.wind["speed"];

        res.render("index.ejs", {
            cityName: cityName,
            countryCode: countryCode,
            weatherID: weatherID,
            temperature: temperature,
            humidity: humidity,
            windSpeed: windSpeed,
        });
    } catch (error) {
        res.status(404).render("notfound.ejs");
    }
});

app.listen(3000, () => {
    console.log(`Server running on port ${port}`);
});