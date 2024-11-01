const tmdb = require('../config/tmdb');

const fetchPopularMovies = async () => {
  try {
    const response = await tmdb.get('/movie/popular');
    return response.data.results;
  } catch (error) {
    throw new Error('Failed to fetch movies');
  }
};

module.exports = { fetchPopularMovies };
