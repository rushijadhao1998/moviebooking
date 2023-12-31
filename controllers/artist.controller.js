// controllers/artist.controller.js
// const Artist = require('../models/artist.model');

const { Artist } = require('../models');

// API: Get all artists
exports.findAllArtists = async (req, res) => {
  try {
    const artists = await Artist.find();
    res.json(artists);
  } catch (error) {
    console.error('Error in findAllArtists:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
