const express = require('express');
const router = express.Router();

router.route('/')

    .get((req, res, next )=> {
        console.log(req.query);
        console.log(`Got ${req.query.string} on ${req.url} (${req.method})`);
        req.isGet = true;

        let result_b = {
            'isGet': req.isGet,
            'string': req.query.string
        }

        res.render('ps3', result_b)
    })

    .post((req, res, next) => {
        console.log(`Got ${req.body.string} on ${req.url} (${req.method})`);
        console.log(`Length of the string = ${req.body.string.length}`);
        req.isPost = true;

        let result_c = {
            'isPost' : req.isPost,
            'string' : req.body.string,
            'length' : req.body.string.length
        }
        res.render('ps3', result_c);

    })


module.exports = router;