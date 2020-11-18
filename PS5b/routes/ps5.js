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
    console.log("route using redis ")
    const locationID = req.body.location;
    let match = await asyncExists(locationID);

    // check for valid response
    if (match) {
        console.log("cached matched")
        let jsData = await asyncGet(locationID);
        //build JSON data
        let response = {
            key: locationID,
            value: jsData,
            cached: true
        }
        res.send(response);
    }

    // not in cache
    else {
        console.log("no cache here")
        let retJsData = await getData(locationID)
        let status = await asyncSet(locationID, JSON.stringify(retJsData));
        let response = {
            key: locationID,
            value: retJsData,
            cached: false
        }
        await asyncExpire(locationID, 15);
        res.send(response);
    }
})


// retrieve the external API data
const getData = async location => {
    console.log("Fetch data from external API")
    const rawData = await fetch(CONFIG.fetchOptions.url + "/" + location.toString());
    const jsData = await rawData.json();
    return jsData;
}


// router.route('/')
//     .post( (req, res, next) => {
//         console.log("route using POST method")
//
//         //incoming external data render to back-end
//         getData(req.body.location_id)
//             .then(jsData => res.render('ps4',
//                 {
//                     'city' : jsData.title,
//                     'today' : jsData.consolidated_weather[0],
//                     'tmr' : jsData.consolidated_weather[1]
//                 }   ))
//             .catch(error => console.log("Failed to fetch JSON"))
//     })


module.exports = router;