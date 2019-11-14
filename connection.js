const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/popular_movies', { useNewUrlParser: true });

let mongoURI = "";

if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/popular_movies";
  };

module.exports = mongoose;