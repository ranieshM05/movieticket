// server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Import routes
const authRoutes = require('./Routes/authRoutes');
const movieRoutes = require('./routes/movieRoutes');
const bookingRoutes = require('./Routes/bookingRoutes');

// Define a root route
app.get('/', (req, res) => {
    res.send('Welcome to the Ticket Booking API!');  // Simple response for root URL
});

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/bookings', bookingRoutes);

// Start server and assign it to a variable
const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${3000}`);
});

// Set timeout for the server
server.setTimeout(500000);
    