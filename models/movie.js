const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;


const Movie = new Schema({
    title: String,
    overview: String,
    releaseDate: String,
    voteAverage: Number
});

module.exports = mongoose.model("Movie", Movie);