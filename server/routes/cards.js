var express = require('express');
var router = express.Router();
var stripe = require('stripe')('sk_test_6esFafudgUu4tILCyIkxmYDJ');
var Card = require('..//models/card');

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json({ message: 'hooray! welcome to our api!' });
});

router.route('/cards')


.post(function(req, res) {
    var cardData = new Card(req.body);      // create a new instance of the Customer model
        console.log('cardData database');
        console.log(cardData);
    var token = req.body.id;
    cardData.stripeToken = req.body.id;
    cardData.card_id= req.body.card.id;
    cardData.name= req.body.card.name;
    cardData.country= req.body.card.country;
    cardData.card_number= req.body.card.number;
    cardData.card_expMonth= req.body.card.exp_month;
    cardData.card_expYear= req.body.card.exp_year;




    stripe.customers.create(
      { email:req.body.email,
        source:req.body.token,
      },

    function(err, customer) {
      if (err)
        // res.send(err);
        cardData.cus_id = customer.id;
    });

    // Charge the user's card:
      stripe.charges.create({
        amount: 2000,
        currency: "usd",
        description: "Example charge",
        source: token,
      }, function(err, res) {
        if (err)
          res.send(err);
          cardData.charges_id = res.id;
          cardData.save(function (err) {
            if (err) return handleError(err); // saved!
          });
          stripe.refunds.create({
            charge: res.id,
             amount: 1000,
          }, function(err, refund) {
            // asynchronously called
          });
      });
     // save the customer and check for errors
      Card.create(cardData, function(err,card) {
        if (err)
          res.send(err);
          res.json(cardData);
          console.log(cardData);
        });

})


module.exports = router;
