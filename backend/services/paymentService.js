const paypalClient = require('../config/paypal');

const processPayment = async (orderDetails) => {
  
  return { status: 'success', orderId: 'some-order-id' }; // Placeholder response
};

module.exports = { processPayment };
