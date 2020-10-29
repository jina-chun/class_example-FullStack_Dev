const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const CONFIG = require('../config/fetchConfigs');


// HTML
// fetch('https://www.metaweather.com/api/location/2459115/')
//     .then(res => res.text())
//     .then(body => console.log(body))
//     .then(done => console.log("DONE! fetch html"))
//     .catch(error => console.log("Failed to fetch HTML"));

// JSON
// fetch('https://www.metaweather.com/api/location/2459115/')
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .then(done => console.log("DONE! fetch JSON"))
//     .catch(error => console.log("Failed to fetch JSON"))


/* PS4 code starts here! the code above is present for testing purpose */
// retrieve the external API data
const getData = async location => {
    console.log("Fetch data from external API")
    let rawData = await fetch(CONFIG.fetchOptions.url + "/" + location.toString());
    let jsData = await rawData.json();
    return jsData;
}

// mounting process matches localhost:3000/ps4
// route using post method
router.route('/')
    .post( (req, res, next) => {
        console.log("route using POST method")

        //incoming external data render to back-end
        getData(req.body.location_id)
            .then(jsData => res.render('ps4',
                {
                    'city' : jsData.title,
                    'today' : jsData.consolidated_weather[0],
                    'tmr' : jsData.consolidated_weather[1]
                }   ))
            .catch(error => console.log("Failed to fetch JSON"))
    })


module.exports = router;