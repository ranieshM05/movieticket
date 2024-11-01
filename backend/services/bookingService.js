const Booking = require('../models/Booking');

const createNewBooking = async (bookingData) => {
  try {
    const booking = await Booking.create(bookingData);
    return booking;
  } catch (error) {
    throw new Error('Booking failed');
  }
};

module.exports = { createNewBooking };
