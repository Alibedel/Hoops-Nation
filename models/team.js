const mongoose = require('mongoose')

const Schema = mongoose.Schema




const resultSchema = new mongoose.Schema({
    total: {
        type: Number
    },
    percentage: {
        type: String
    }
})
const gameSchema = new mongoose.Schema({
    played: {
        type: Number
    },
    win: resultSchema,

    lose: resultSchema
})



const pointsSchema = new mongoose.Schema({
    for: {
        type: Number
    },
    against: {
        type: Number
    }
})

const teamSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    logo: {
        type: String
    }
})


const standingSchema = new mongoose.Schema({
    team : teamSchema,
    
    games : gameSchema,

    points : pointsSchema,

    position : {
        type: Number
    }
    
}, {
    timestamps : true
});




module.exports = mongoose.model('Standing', standingSchema);










