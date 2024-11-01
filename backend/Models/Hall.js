const mongoose = require('mongoose');

const hallSchema = new mongoose.Schema({
  name: { type: String, required: true },
  totalSeats: { type: Number, required: true },
  seats: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Seat' }],
});

module.exports = mongoose.model('Hall', hallSchema);
