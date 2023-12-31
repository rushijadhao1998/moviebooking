// models/artist.model.js
module.exports = (mongoose) => {
  const Artist = mongoose.model(
    'artist',
    mongoose.Schema(
      {
        // Define artist schema
        // ...
      },
      { timestamps: true }
    )
  );

  return Artist;
};


const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
artistid: Number,
first_name: String,
last_name: String,
wiki_url: String,
profile_url: String,
movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
});

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;
