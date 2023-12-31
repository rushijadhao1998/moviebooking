// models/genre.model.js
module.exports = (mongoose) => {
  const Genre = mongoose.model(
    'genre',
    mongoose.Schema(
      {
        // Define genre schema
        // ...
      },
      { timestamps: true }
    )
  );

  return Genre;
};


const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
genreid: Number,
genre: String,
});

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;
