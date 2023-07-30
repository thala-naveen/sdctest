var express = require('express');
const pool = require('./pool');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  pool.connect(function(err) {
    if (err) 
    res.render('index', { title: 'db not connected' });
    else
    res.render('index', { title: 'db connected' });
  });
});

module.exports = router;
