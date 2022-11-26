const axios = require("axios");
const Team = require('../models/team')
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

const options = {
  method: 'GET',
  url: 'https://api-basketball.p.rapidapi.com/standings',
  params: {league: '12', season: '2022-2023'},
  headers: {
    'X-RapidAPI-Key': 'b0daf93064msh156cca872619ca0p176bfejsn5b72b37c5500',
    'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
  }
};

// function showTeam () {
//   let teamId = req.params.id
//   axios.request(options).then(function (response) {
//     // console.log(response.data.response);
//     let teamStats = response.data.response[0].map(teamStat => {
//         return {
//             team : teamStat.team,
//             games: teamStat.games,
//             position: teamStat.position ,
//             points: teamStat.points
//         }
//     });
  
//     Team.insertMany(teamStats, function(err, data){
//       // console.log(data)
//       process.exit()
  
//     })


//     Team.findById(req.params.id, function(err, team) {
//       res.render('teams/index',{
//         team
//       })
//     });
  
  
    
//     //  const newdata = teamStats.map(eachstat => {
//     //   // eachstat.games.win
//     //   // console.log(eachstat.games.win)
  
  
  
//     //      return{
//     //          games : eachstat.games,
//     //          lose : eachstat.games.lose,
//     //          win : eachstat.games.win,
//     //          points : eachstat.points,
//     //         }
    
//     //  })
     
  
//     // console.log("teamStats = ", teamStats)
//     // console.log('newData', newdata)
//     // return Team.insertMany(teamStats)
//   }).catch(function (error) {
//     console.error(error);
//   });
//   res.render('teams/index')
  
// }





module.exports = {

  
  
};