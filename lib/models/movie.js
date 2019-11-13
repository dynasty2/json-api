const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;


const movieSchema = new Schema({
    title: String,
    overview: String,
    releaseDate: String,
    voteAverage: Number
});

module.exports = mongoose.model("Movie", movieSchema);