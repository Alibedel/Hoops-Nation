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







module.exports = {

  
  
};