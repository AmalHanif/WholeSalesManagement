var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wholesales');
var User = require('..//models/userInfo');
/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/helloworld', function(req, res, next) {
  res.render('helloworld', { title: 'HELLO WORLD...!!!' });
});

module.exports = router;
