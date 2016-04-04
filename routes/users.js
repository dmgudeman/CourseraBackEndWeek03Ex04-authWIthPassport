var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');
var Verify = require('./verify');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// For a new user
router.post('/register', function(req, res) {
  User.register(new User({username: req.body.username}),
  req.body.password, function(err, user) {
        if (err) {
            return res.status(500).json({err: err});
        }
          passport.authenticate('local')(req, res, function () {
              return res.status(200).json({status: 'Registration Successfule'});
          });
      });
});

// For an existing user
router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({
                err: info
            });
        }
        // logIn is a function supplied by passport
        req.logIn(user, function(err) {
            if (err) {
                return res.status(500).json({
                    err: 'Could not log in user'
                });
            }

            // if it gets to here there is a valid password and username so I want a token to verify
            var token = Verify.getToken(user);
            res.status(200).json({
                status: 'Login successful!',
                success: true,
                token: token
            });
        });
    })(req,res,next);
});

// logout is a passport function.  The token should be destroyed here as well
router.get('/logout', function(req, res) {
    req.logout();
    res.status(200).json({
        status: 'Bye!'
    });
});

module.exports = router;
