// controllers/genre.controller.js
// const Genre = require('../models/genre.model');

const { Genre } = require('../models');

// API: Get all genres
exports.findAllGenres = async (req, res) => {
  try {
    const genres = await Genre.find();
    res.json(genres);
  } catch (error) {
    console.error('Error in findAllGenres:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
