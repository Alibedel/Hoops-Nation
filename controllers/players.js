const Player = require('../models/player')
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


function create(req, res) {
    // convert nowShowing's checkbox of nothing or "on" to boolean
    // req.body.nowShowing = !!req.body.nowShowing;
    // remove whitespace next to commas
    // req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
    // split if it's not an empty string
    // if (req.body.cast) req.body.cast = req.body.cast.split(',');
    const player = new Player(req.body);
    player.save(function(err, players) {
      // one way to handle errors
      if (err) return res.render('teams/new',{
        players
      });
      console.log(team);
      // for now, redirect right back to new.ejs
      res.redirect('teams/new', {
        players
      });
    });
}
function listAll(req, res){
    Player.find({}, function(err, players){
        if(err) throw err
       res.render('teams/new', {
 
            players
        })
    }) 
}

function show(req, res){
    Player.findById(req.params.id, function(err,player){
        console.log(req.params)
        if(err) console.log(err)
        res.render('teams/new', {
            player
        })
    })
}

// function newPlayer(req, res){
//     res.render('teams/new',{
//         players

//     })
// }

module.exports = {
    create,
    // new: newPlayer,
    listAll,
    show
}