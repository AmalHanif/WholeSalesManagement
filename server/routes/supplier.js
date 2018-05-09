var express = require('express');
var router = express.Router();
var Supplier = require('..//models/supplierInfo');

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

/* GET suppliers listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json({ message: 'hooray! welcome to our api!' });
});

router.route('/wholeSales')

  // create a supplier (accessed at POST http://localhost:8080/api/suppliers)
    .post(function(req, res) {
        var supplierdb = new Supplier(req.body);      // create a new instance of the Customer model
            console.log('supplier database');
            console.log(supplierdb);

        Supplier.create(supplierdb, function(err,supplier) {
            if (err)
                res.send(err);
            res.json(supplierdb);
            console.log(supplierdb);
        });
    })
    // get all the suppliers (accessed at GET http://localhost:8080/api/suppliers)

    .get(function(req, res) {
       Supplier.find(function(err, supplierInfo) {
           if (err)
               res.send(err);

           res.json(supplierInfo);
       });
     });

router.route('/wholeSales/:supplier_id')
   // get the customer with that id (accessed at GET http://localhost:8080/api/supplierInfo/:supplier_id)
   .get(function(req, res) {
       Supplier.findById(req.params.supplier_id, function(err, supplierInfo) {
           if (err)
               res.send(err);
           res.json(supplierInfo);
       });
   })
   .put(function(req, res) {

        // use our customer model to find the customer we want
        Customer.findById(req.params.supplier_id, function(err, supplier) {

            if (err)
                res.send(err);

            customer.name = req.body.name;  // update the bears info
            customer.email = req.body.email;
            // save the customer
            customer.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Customer updated!' });
            });

        });
    })
    // delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
    .delete(function(req, res) {
        Customer.remove({
            _id: req.params.supplier_id
        }, function(err, customer) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });




module.exports = router;
