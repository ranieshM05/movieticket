const tmdb = require('../config/tmdb');

const getMovies = async (req, res) => {
  try {
    const response = await tmdb.get('/movie/popular');
    res.json(response.data.results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching movies' });
  }
};

module.exports = { getMovies };
