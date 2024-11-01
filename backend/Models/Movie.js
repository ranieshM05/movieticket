const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  releaseDate: Date,
  genre: [String],
  duration: Number,  // in minutes
  posterPath: String, // URL path for the movie poster
});

module.exports = mongoose.model('Movie', movieSchema);
