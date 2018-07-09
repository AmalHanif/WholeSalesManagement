var express = require('express');
var router = express.Router();
var User = require('..//models/userInfo');

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

router.route('/wholeSales')

  // create a user (accessed at POST http://localhost:8080/api/users)
    .post(function(req, res) {
        var userdb = new User(req.body);      // create a new instance of the Customer model
            console.log('user database');
            console.log(userdb);

        User.create(userdb, function(err,user) {
            if (err)
                res.send(err);
            res.send(user);
            console.log(user);
        });
    })
    // get all the users (accessed at GET http://localhost:8080/api/users)

    .get(function(req, res) {
       User.find(function(err, userInfo) {
           if (err)
               res.send(err);

           res.json(userInfo);
       });
     });

router.route('/wholeSales/user_id')
   // get the customer with that id (accessed at GET http://localhost:8080/api/userInfo/:user_id)
   .post(function(req, res) {
       console.log(req.body)
       User.findById(req.body.email, function(err, userInfo) {
           if (err)
               res.send(err);
           res.json(userInfo);
           console.log("result = "+userInfo)
       });
   })
//    .put(function(req, res) {

//         // use our customer model to find the customer we want
//         Customer.findById(req.params.user_id, function(err, customer) {

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
//             _id: req.params.user_id
//         }, function(err, customer) {
//             if (err)
//                 res.send(err);

//             res.json({ message: 'Successfully deleted' });
//         });
//     });




module.exports = router;
