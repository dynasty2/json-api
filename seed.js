const Movie = require('../models/movie');
const movieData = require('./movies.json');

const newData = movieData.map(movie => {
    const newMovie = {}
    newMovie.title = movie.title
    newMovie.voteAverage = movie.vote_average 
    newMovie.releaseDate = movie.release_date
    newMovie.overview = movie.overview
    return newMovie
});
Movie.deleteMany({}).then(() => {
    Movie.create(newData)
    .then(movies => {
        console.log(movies)
    })
    .catch(err => {
        console.log(err)
    });
})


