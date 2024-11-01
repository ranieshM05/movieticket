const mongoose = require('mongoose');

const showtimeSchema = new mongoose.Schema({
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  time: { type: Date, required: true },
  hall: { type: mongoose.Schema.Types.ObjectId, ref: 'Hall', required: true },
});

module.exports = mongoose.model('Showtime', showtimeSchema);
