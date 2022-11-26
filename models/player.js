const mongoose = require('mongoose')

const Schema = mongoose.Schema



const playerSchema = new mongoose.Schema({
    playerName: {
        type: String,
        required: true
    },
    age: Number,
    height: Number,
    position: {
        type: String,
        enum: ['SG', 'G', 'SF', 'PF']
    },
    comment: {
        type: String

    }
}, {
    timestamps: true
})


module.exports = mongoose.model('Player', playerSchema);