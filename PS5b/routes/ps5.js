const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const CONFIG = require('../config/fetchConfigs');

const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');

//async returns 0 or 1 : true or false
const asyncSet = promisify(client.set).bind(client);
const asyncGet = promisify(client.get).bind(client);
const asyncExists = promisify(client.exists).bind(client);
const asyncExpire = promisify(client.expire).bind(client);


client.on("error", function (error) {
    console.error(error);
});

router.post('/', async (req, res, next) => {
    console.log("Route using redis")
    const locationID = req.body.location;
    let match = await asyncExists(locationID);

    // check for valid response
    if (match) {
        console.log("cache matched")
        let jsonStr = await asyncGet(locationID);
        let jsonObject = JSON.parse(jsonStr);           //build JSON data

        const today = jsonObject.consolidated_weather[0];
        //const tmr = jsonObject.consolidated_weather[1];

        // formatted response, similar to PS4 pug file
        let response = {
            woeid: locationID,
            cached: true,
            city: jsonObject.title,
            date: today.applicable_date,
            weather: today.weather_state_name,
            minTemp: today.min_temp,
            maxTemp: today.max_temp,
            humidity: today.humidity,
            windSpeed: today.wind_speed
        }

        // original JSON data object with cache flag
        let raw_response = {
            woeid: locationID,
            cached: true,
            value: jsonObject
        }
        res.send(raw_response);
    }


    // if not in cache, fetch from API
    else {
        console.log("nothing in cache")
        let jsData = await getData(locationID)
        await asyncSet(locationID, JSON.stringify(jsData));
        const today = jsData.consolidated_weather[0];

        // formatted response, similar to PS4 pug file
        let response = {
            woeid: locationID,
            cached: false,
            city: jsData.title,
            date: today.applicable_date,
            weather: today.weather_state_name,
            minTemp: today.min_temp,
            maxTemp: today.max_temp,
            humidity: today.humidity,
            windSpeed: today.wind_speed
        }

        // original JSON data object with cache flag
        let raw_response = {
            woeid: locationID,
            cached: false,
            value: jsData
        }

        await asyncExpire(locationID, 15);
        res.send(raw_response);
    }
})






// retrieve the external API data
const getData = async location => {
    console.log("Fetch data from external API")
    const rawData = await fetch(CONFIG.fetchOptions.url + "/" + location.toString());
    const jsData = await rawData.json();
    return jsData;
}



module.exports = router;