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
        enum: ['GK', 'CB', 'WB', 'CF', 'AM', 'DM', 'FB']
    },
    comment: {
        type: String

    }
}, {
    timestamps: true
})


module.exports = mongoose.model('Player', playerSchema);