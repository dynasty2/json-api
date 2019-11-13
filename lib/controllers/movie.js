const Movie = require("../models/movie.js")
module.exports = {
    index: (req, res) => {
      Movie.find({})
        .then(movies => {
          res.json(movies);
        });
    },
    showName: (req, res) => {
      Movie.find({name: req.params.name})
        .then(movie => {
          res.json(movie);
        });
    },
    create: (req, res) => {
      Movie.create(req.body)
        .then(movie => {
          res.json(movie);
        });
    },
    edit: (req, res) => {
      Movie.findOneAndUpdate({name: req.params.name}, req.body, {new: true})
        .then(movie => {
          res.json(movie);
        });
    },
    delete: (req, res) => {
      Movie.remove({name: req.params.name})
        .then(movie => {
          res.json(movie);
        });
    }
  }
  