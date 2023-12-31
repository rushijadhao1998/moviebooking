
// controllers/movie.controller.js
const Movie = require('../models/movie.model');

// app/controllers/movie.controller.js
const { Movie } = require('../models');

// API: Get all movies or filter by status
exports.findAllMovies = async (req, res) => {
  try {
    const { status } = req.query;
    let movies;

    if (status) {
      movies = await Movie.find({ published: status.toUpperCase() });
    } else {
      movies = await Movie.find();
    }

    res.json(movies);
  } catch (error) {
    console.error('Error in findAllMovies:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// API: Get details of a movie by its ID
exports.findOne = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const movie = await Movie.findById(movieId);

    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    res.json(movie);
  } catch (error) {
    console.error('Error in findOne:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// API: Get details of shows for a specific movie by its ID
exports.findShows = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const movie = await Movie.findById(movieId);

    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    res.json(movie.shows);
  } catch (error) {
    console.error('Error in findShows:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
