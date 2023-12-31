// models/movie.model.js
module.exports = (mongoose) => {
  const Movie = mongoose.model(
    'movie',
    mongoose.Schema(
      {
        // Define movie schema
        // ...
      },
      { timestamps: true }
    )
  );

  return Movie;
};


const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
movieid: Number,
title: String,
published: Boolean,
released: Boolean,
poster_url: String,
release_date: Date,
publish_date: Date,
artists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artist' }],
genres: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }],
duration: Number,
critic_rating: Number,
trailer_url: String,
wiki_url: String,
story_line: String,
shows: [{
  id: Number,
  theatre: { name: String, city: String },
  language: String,
  show_timing: Date,
  available_seats: String,
  unit_price: Number,
}],
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
