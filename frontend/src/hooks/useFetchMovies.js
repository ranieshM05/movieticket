import { useState, useEffect } from 'react';

const useFetchMovies = (url) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!url) {
        setError('URL is undefined');
        setLoading(false);
        return;
      }

      try {
        console.log("Fetching movies from:", url); // Log the URL being fetched
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        // Check if results exist and are an array
        if (data.results && Array.isArray(data.results)) {
          setMovies(data.results);
        } else {
          throw new Error('Expected results to be an array');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [url]);

  return { movies, error, loading };
};

export default useFetchMovies;
