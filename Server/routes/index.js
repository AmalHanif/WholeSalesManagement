var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wholesales');
var User = require('..//models/userInfo');
var Card = require('..//models/card');
/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/helloworld', function(req, res, next) {
  res.render('helloworld', { title: 'HELLO WORLD...!!!' });
});
/* GET Userlist page.*/
router.get('/customerlist', function(req, res) {
    res.render('customerlist', { title: 'list' });
    Customer.find(function(err, customers){
		if(err)
			res.send(err);
		res.json(customers);
	});
});


/* GET New customer page. */
router.get('/newcustomer', function(req, res) {
    res.render('newcustomer', { title: 'Add New Customer', message: 'Add New Customer'});
     res.redirect('/customerlist');
});


/* POST to Add User Service */
router.post('addcustomers', function(req, res) {
  Customer.create( req.body, function(err, customers){
    if(err)
      res.send(err);
    res.json(customers);
  });
});
router.post('addcustomers', function(req, res) {
    var customer = new Customer();      // create a new instance of the Customer model
    customer.name = req.body.name;  // set the customers name (comes from the request)
    customer.email = req.body.email;
    // save the customer and check for errors
    customer.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Customer created!' });
    });
})

module.exports = router;
