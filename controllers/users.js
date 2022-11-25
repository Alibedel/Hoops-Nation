const User = require('../models/user');
const DATABASE_URL = "mongodb+srv://ali1998:Legendog98@cluster0.ovejytq.mongodb.net/nbaleague?retryWrites=true&w=majority"
const mongoose = require('mongoose');


mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

// database connection event
db.on('connected', function () {
  console.log(`Mongoose connected to: ${db.host}:${db.port}`);
});



function index(req, res, next) {
  // Make the query object to use with Student.find based up
  // the user has submitted the search form or now
  const modelQuery = req.query.name ? { name: new RegExp(req.query.name, 'i') } : {};
  // Default to sorting by name
  const sortKey = req.query.sort || 'name';
  User.find(modelQuery)
    .sort(sortKey)
    .exec(function (err, userA) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render('teams/index', {
        userA,
        name: req.query.name,
        sortKey,
        user: req.user
      });
    });
}


module.exports = {
    index,
  //   addFact,
  //   delFact,
  };

// // function addFact(req, res, next) {
// //   req.user.facts.push(req.body);
// //   req.user
// //     .save()
// //     .then(() => res.redirect('/students'))
// //     .catch((err) => res.redirect('/students'));
// // }

// // function delFact(req, res, next) {
// //   Student.findOne({ 'facts._id': req.params.id })
// //     .then((student) => {
// //       student.facts.id(req.params.id).remove();
// //       return student.save();
// //     })
// //     .then(() => res.redirect('/students'))
// //     .catch(() => res.redirect('/students'));
// // }
