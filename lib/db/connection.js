const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/popular_movies', { useNewUrlParser: true });
module.exports = mongoose;