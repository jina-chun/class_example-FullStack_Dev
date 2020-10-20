const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CS412 PS3 Jina Chun U15518893' });
});

module.exports = router;
