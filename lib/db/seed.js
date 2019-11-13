const Movie = require('../models/movie');
const movieData = require('./movies.json');

Movie.remove({})
Movie.create(movieData)
  .then(movies => {
      console.log(movies)
  })
  .catch(err => {
      console.log(err)
  });

