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
router.route('/wholeSales/sales/:sales_id')
    .put(function(req, res) {
        // use our sales model to find the sales we want
        Sales.findByIdAndUpdate(req.params.sales_id,req.body, function(err, sales) {
           
            sales.cName=req.body.cName,
            sales.cAddress=req.body.cAddress,
            sales.pName=req.body.pName,
            sales.pBrand=req.body.pBrand,
            sales.pQuantity=req.body.pQuantity,
            sales.pSold=req.body.pSold,
            sales.pPrice=req.body.pPrice,
            sales.soldDate=req.body.soldDate
            
            if (err)
                res.send(err);
         
            // save the sales
            sales.save(function(err,sales) {
                if (err)
                    res.send(err);

                res.json({ message: 'Sales updated!' });
            });

        });
    })
    //   delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
    .delete(function(req, res) {
        console.log("db request"+req.params.sales_id)
        Sales.remove({
            _id: req.params.sales_id
        }, function(err, salesInfo) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports = router;
