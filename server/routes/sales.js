var express = require('express');
var router = express.Router();
var Sales = require('..//models/salesInfo');

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.route('/wholeSales/sales')
    .get(function(req, res) {
        Sales.find(function(err, salesInfo) {
            if (err)
                res.send(err);
            console.log(salesInfo)
            res.json(salesInfo);
        });
    })

//   create a sales (accessed at POST http://localhost:8080/api/saless)
    .post(function(req, res) {
        var salesdb = new Sales(req.body);      // create a new instance of the Customer model
            console.log('sales database');
            console.log(salesdb);

        Sales.create(salesdb, function(err,sales) {
            if (err)
                res.send(err);
            res.json(salesdb);
            console.log(salesdb);
        });
    });

module.exports = router;
