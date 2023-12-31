const mongoose = require('mongoose');
const Artist = require('./artist.model');
const Genre = require('./genre.model');
const Movie = require('./movie.model');
const User = require('./user.model');

const db = {};

db.mongoose = mongoose;
db.url = "mongodb://localhost:27017/moviesdb";

db.Artist = Artist;
db.Genre = Genre;
db.Movie = Movie;
db.User = User;

module.exports = db;
