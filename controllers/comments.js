// const Player = require('../models/player');
// const DATABASE_URL = "mongodb+srv://ali1998:Legendog98@cluster0.ovejytq.mongodb.net/nbaleague?retryWrites=true&w=majority"
// const mongoose = require('mongoose');
// const ObjectId = mongoose.Types.ObjectId;


// mongoose.connect(DATABASE_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const db = mongoose.connection;

// // database connection event
// db.on('connected', function () {
//   console.log(`Mongoose connected to: ${db.host}:${db.port}`);
// });



// function create(req, res) {
//   // 1st find the movie we're dealing in the DB
//   Player.findById(
//     req.params.id,

//     function (err, player) {
//       // THEN take the submitted review (from the form) and add it to the reviews array
//       player.comments.push(req.body);

//       // FINALLY save the new modified movie model in the DB
//       player.save(function (err) {
//         if (err) {
//           console.log(err);
//         }

//         res.redirect(`/players/${player._id}`);
//       });
//     }
//   );
// }

// module.exports = {
//   create,
// };
