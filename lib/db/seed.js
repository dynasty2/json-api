const Movie = require('../models/movie');
const movieData = require('./movies');

Movie.remove({})
Movie.collection.insert(movieData)
  .then(movies => {
      console.log(movieData)
  })
  .catch(err => {
      console.log(err)
  });