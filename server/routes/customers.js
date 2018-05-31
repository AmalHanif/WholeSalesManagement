var express = require('express');
var router = express.Router();
var Customer = require('..//models/customerInfo');

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Customer is active.');
    next(); // make sure we go to the next routes and don't stop here
});

/* GET customers listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json({ message: 'hooray! welcome to our api!' });
});

router.route('/wholeSales/customers')

//   create a customer (accessed at POST http://localhost:8080/api/customers)
    .post(function(req, res) {
        console.log(res)
        var customerdb = new Customer(req.body);      // create a new instance of the Customer model
            console.log('customer database');
            console.log(customerdb);

        Customer.create(customerdb, function(err,customer) {
            if (err)
                res.send(err);
            res.json(customerdb);
            console.log(customerdb);
        });
    })
    // get all the customers (accessed at GET http://localhost:8080/api/customers)

    .get(function(req, res) {
        Customer.find(function(err, customerInfo) {
            if (err)
                res.send(err);
            console.log(customerInfo)
            res.json(customerInfo);
        });
    });

 
// router.route('/wholeSales/:customer_id')
//    // get the customer with that id (accessed at GET http://localhost:8080/api/customerInfo/:customer_id)
//    .get(function(req, res) {
//        Customer.findById(req.params.customer_id, function(err, customerInfo) {
//            if (err)
//                res.send(err);
//            res.json(customerInfo);
//        });
//    })
//    .put(function(req, res) {

//         // use our customer model to find the customer we want
//         Customer.findById(req.params.customer_id, function(err, customer) {

//             if (err)
//                 res.send(err);

//             customer.name = req.body.name;  // update the bears info
//             customer.email = req.body.email;
//             // save the customer
//             customer.save(function(err) {
//                 if (err)
//                     res.send(err);

//                 res.json({ message: 'Customer updated!' });
//             });

//         });
//     })
//     // delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
//     .delete(function(req, res) {
//         Customer.remove({
//             _id: req.params.customer_id
//         }, function(err, customer) {
//             if (err)
//                 res.send(err);

//             res.json({ message: 'Successfully deleted' });
//         });
//     });




module.exports = router;
