const express = require('express');
const { getMovies } = require('../controllers/movieController');
const Movie = require('../Models/Movie');
const router = express.Router();
router.get('/api/movies', async (req, res) => {
    try {
      const movies = await Movie.find(); // Fetching movies from the database
      res.json({ results: movies }); // Return results in the expected format
    } catch (error) {
      res.status(500).json({ message: 'Error fetching movies' });
    }
  });

router.get('/popular', getMovies);


module.exports = router;
