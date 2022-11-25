var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users');


 const passport = require('passport');


 router.get('/', function(req, res, next) {
    res.render('teams/index');
  });


router.get('/teams', usersCtrl.index);
// router.get('/new', usersCtrl.index);

// Google OAuth login route
 router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

 //Google OAuth callback route
 router.get('/oauth2callback', passport.authenticate(
   'google',
   {
     successRedirect : '/teams',
     failureRedirect : '/teams'
   }
));

// OAuth logout route
 router.get('/logout', function(req, res){
    req.logout(function (req, err){
    
    });
  res.redirect('/teams');
});



module.exports = router;

