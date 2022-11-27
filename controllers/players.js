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



function index(req, res){
  Player.find({}, function(err,players){
    res.render('players/show', {
      players
    });

  })


}

function create(req, res) {
    console.log('hi')
    console.log('data', req.body)
    const player = new Player(req.body);
    player.save(function(err, players) {
      // one way to handle errors
      console.log(players);
      if (err) return res.render('players/new',{
        players
      });
      // console.log(players);
      // for now, redirect right back to new.ejs
        res.redirect('/players')
    });
}
function playerInfo(req, res){
  Player.findById(req.params.id, function(err, player){
    res.render('players/update', {
      player
    })


  })
}


function newPlayer(req, res){
  res.render('players/new')


}

//implement controller function to delete a team
function deletePlayer(req, res) {
  Player.deleteOne({ "_id" : req.params.id }, function(err, player){
      if(err) console.log(err)
  });
  res.redirect('/players');
}

function update(req, res){
  Player.findByIdAndUpdate(req.params.id, 
      {
      playerName: req.body.playerName,
      age: req.body.age,
      height: req.body.height,
      comment: req.body.comment
  }, 
  function(err, team){
      if(err) console.log(err)
      res.redirect('/players')
  })
}



module.exports = {
    create,
    delete: deletePlayer,
    playerInfo,
    update,
    index,
    newPlayer
}