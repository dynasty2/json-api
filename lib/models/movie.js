const mongoose = require('../db/connection.js');
const movieSchema = mongoose.Schema;


const movieSchema = new Schema({
    title: String,
    overview: String,
    releaseDate: Date,
    voteAverage: Number
});

module.exports = mongoose.model("Movie", movieSchema);