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
    router.route('/wholeSales/stocks/:stocks_id')
        .put(function(req, res) {
            // use our stock model to find the stock we want
            Stock.findByIdAndUpdate(req.params.stocks_id,req.body, function(err, stock) {
                
                stock.pName=req.body.pName,
                stock.pBrand=req.body.pBrand,
                stock.pQuantity=req.body.pQuantity,
                stock.pCost=req.body.pCost,
                stock.pPrice=req.body.pPrice,
                stock.purchaseDate=req.body.purchaseDate
                
                if (err)
                    res.send(err);
            
                // save the stock
                stock.save(function(err,stock) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'stock updated!' });
                });

            });
        })
        //   delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
        .delete(function(req, res) {
            console.log("db request"+req.params.stocks_id)
            Stock.remove({
                _id: req.params.stocks_id
            }, function(err, stockInfo) {
                if (err)
                    res.send(err);

                res.json({ message: 'Successfully deleted' });
            });
        });

module.exports = router;
