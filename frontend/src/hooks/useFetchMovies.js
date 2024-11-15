import { useState, useEffect } from "react";

const useFetchMovies = (searchQuery = "avengers") => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = "your-fandango-api-key"; // Replace with your API key
  const apiSig = "776f5f2a6e1a22a5ef33c9d04d904c2593144e0e4da11b05abf6ed9ea7fb747e"; // Replace with the correct API signature

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://api.fandango.com/v1/?op=contentsearch&repos=all&q=${searchQuery}&apikey=${apiKey}&sig=${apiSig}`);
        const data = await response.json();

        if (data && data.movies) {
          setMovies(data.movies);
        } else {
          setError("No movies found.");
        }
      } catch (err) {
        setError("Failed to fetch movies.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  return { movies, loading, error };
};

export default useFetchMovies;
