// const { default: mongoose } = require("mongoose")

// {
//     team: {
//       id: 160,
//       name: 'Utah Jazz',
//       logo: 'https://media.api-sports.io/basketball/teams/160.png'
//     },
//     games: { played: 19, win: [Object], lose: [Object] },
//     position: 1,
//     points: { for: 2231, against: 2176 }
//   },
//   {
//     games: { played: 17, win: [Object], lose: [Object] },
//     lose: { total: 8, percentage: '0.471' },
//     win: { total: 9, percentage: '0.529' },
//     points: { for: 1943, against: 1945 }
//   },


//   const standingSchema = new mongoose.Schema({
//     team : teamSchema,

//     games : gameSchema,

//     win : resultSchema,

//     lose : resultSchema
//     ,
//     points : pointsSchema,

//     position : {
//         type: Number
//     }
//     // players: [playerSchema]
// }, {
//     timestamps : true
// });


// const gameSchema = new mongoose.Schema({
//     played: {
//         type: Number
//     },
// })

// const resultSchema = new mongoose.Schema({
//     total: {
//         type: Number
//     },
//     percentage: {
//         type: String
//     }
// })

// const pointsSchema = new mongoose.Schema({
//     for: {
//         type: Number
//     },
//     against: {
//         type: Number
//     }
// })

// const teamSchema = new mongoose.Schema({
//     id: {
//         type: Number
//     },
//     name: {
//         type: String
//     },
//     logo: {
//         type: String
//     }
// })

