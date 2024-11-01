const nodemailer = require('nodemailer');

const sendBookingConfirmation = async (email, bookingDetails) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Booking Confirmation',
    text: `Your booking is confirmed for ${bookingDetails.movie}.`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendBookingConfirmation };
