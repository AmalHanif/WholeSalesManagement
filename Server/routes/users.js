var express = require('express');
var router = express.Router();
var User = require('..//models/user');

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.route('/users')
.post(function(req, res) {
    var userdata = new User(req.body);      // create a new instance of the Customer model
        console.log('customer database');
        console.log(userdata);

         res.send(err);
           userdata.email = user.email;
          userdata.name = user.name;
          userdata.password = user.password;
          userdata.save(function (err) {
            if (err) return handleError(err); // saved!
          });
        console.log(userdata);
      });

      User.create(userdata, function(err,users) {
        if (err)
          res.send(err);
          res.json(userdata);
          console.log(userdata);
        });

})

.get(function(req, res) {
   User.find(function(err, users) {
       if (err)
           res.send(err);

       res.json(users);
   });
 });


module.exports = router;
