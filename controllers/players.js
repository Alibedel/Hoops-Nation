const Player = require('../models/player')
const DATABASE_URL = "mongodb+srv://ali1998:Legendog98@cluster0.ovejytq.mongodb.net/nbaleague?retryWrites=true&w=majority"
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

// database connection event
db.on('connected', function () {
  console.log(`Mongoose connected to: ${db.host}:${db.port}`);
});





function create(req, res) {
    // convert nowShowing's checkbox of nothing or "on" to boolean
    // req.body.nowShowing = !!req.body.nowShowing;
    // remove whitespace next to commas
    // req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
    // split if it's not an empty string
    // if (req.body.cast) req.body.cast = req.body.cast.split(',');
    console.log('hi')
    console.log('data', req.body)
    const player = new Player(req.body);
    player.save(function(err, players) {
      // one way to handle errors
      console.log(players);
      if (err) return res.render('teams/new',{
        players
      });
      // console.log(players);
      // for now, redirect right back to new.ejs
      Player.find({}, function(err,players){
        res.render('teams/show', {
          players
        });
        
      })
    });
}
function listAll(req, res){
       res.render('teams/new')
}


//implement controller function to delete a team
function deletePlayer(req, res) {
  Player.deleteOne({ "_id" : ObjectId(req.params.id) }, function(err, player){
      if(err) console.log(err)
  });
  res.redirect('/teams/show');
}


module.exports = {
    create,
    delete: deletePlayer,
    listAll,
    // show
}