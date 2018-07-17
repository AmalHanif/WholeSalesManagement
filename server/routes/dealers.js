var express = require('express');
var router = express.Router();
var Dealer = require('..//models/dealerInfo');

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('dealer is active.');
    next(); // make sure we go to the next routes and don't stop here
});

/* GET dealers listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json({ message: 'hooray! welcome to our api!' });
});

router.route('/wholeSales/dealers')

//   create a dealer (accessed at POST http://localhost:8080/api/dealers)
    .post(function(req, res) {
        console.log(res)
        var dealerdb = new Dealer(req.body);      // create a new instance of the dealer model
            console.log('dealer database');
            console.log(dealerdb);

        Dealer.create(dealerdb, function(err,dealer) {
            if (err)
                res.send(err);
            res.json(dealerdb);
            console.log(dealerdb);
        });
    })
    // get all the dealers (accessed at GET http://localhost:8080/api/dealers)

    .get(function(req, res) {
        Dealer.find(function(err, dealerInfo) {
            if (err)
                res.send(err);
            console.log(dealerInfo)
            res.json(dealerInfo);
        });
    })
    router.route('/wholeSales/dealers/:dealer_id')
       .put(function(req, res) {
        // use our dealer model to find the dealer we want
        Dealer.findByIdAndUpdate(req.params.dealer_id,req.body, function(err, dealer) {
            
            dealer.dID=req.body.dID;
            dealer.dName=req.body.dName
            dealer.company=req.body.company
            dealer.purchaseProducts=req.body.purchaseProducts
            dealer.purchasePrice=req.body.purchasePrice
          
            if (err)
                res.send(err);
        
            // save the dealer
            dealer.save(function(err,dealer) {
                if (err)
                    res.send(err);

                res.json({ message: 'dealer updated!' });
            });

        });
    })
    //   delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
    .delete(function(req, res) {
        console.log("db request"+req.params.dealer_id)
        Dealer.remove({
            _id: req.params.dealer_id
        }, function(err, dealerInfo) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports = router;
