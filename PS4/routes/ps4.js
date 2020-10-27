const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

//HTML
fetch('https://www.metaweather.com/api/location/')
    .then(res => res.text())
    //.then(body => console.log(body))
    .then(done => console.log("DONE! fetch html"))
    .catch(error => console.log("Failed to fetch HTML"));

//JSON
fetch('https://www.metaweather.com/api/location/2459115/')
    .then(res => res.json())
    //.then(json => console.log(json))
    .then(done => console.log("DONE! fetch JSON"))
    .catch(error => console.log("Failed to fetch JSON"))



// b) A route using the POST method that retrieves data from an external API
router.route('/')
    .post( (req, res, next) => {
        console.log("Fetch JSON with POST")         //pass in the req.query into fetch?
        const woeid = req.body.location_id;
        const url = 'https://www.metaweather.com/api/location/' + woeid.toString() + "/";
        fetch(url)
            .then(res => res.json())
            .then(json => res.render('ps4',
                {
                    'city' : json.title,
                    'today' : json.consolidated_weather[0],
                    'tomorrow' : json.consolidated_weather[1]
                }   ))
            .catch(error => console.log("Failed to fetch JSON"))
    })












module.exports = router;