var express = require('express');
var router = express.Router();
var Stock = require('..//models/stockInfo');

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.route('/wholeSales/stocks')
    .get(function(req, res) {
        Stock.find(function(err, stockInfo) {
            if (err)
                res.send(err);
            console.log(stockInfo)
            res.json(stockInfo);
        });
    })

//   create a Stock (accessed at POST http://localhost:8080/api/Stocks)
    .post(function(req, res) {
        var Stockdb = new Stock(req.body);      // create a new instance of the Customer model
            console.log('Stock database');
            console.log(Stockdb);

        Stock.create(Stockdb, function(err,Stock) {
            if (err)
                res.send(err);
            res.json(Stockdb);
            console.log(Stockdb);
        });
    });

module.exports = router;
