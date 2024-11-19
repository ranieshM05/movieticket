import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function MovieCard({ movie }) {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle "Book Now" button click
  const handleBookNow = () => {
    navigate(`/booking/${movie.id}`); // Navigate to the booking page for this movie
  };

  return (
    <div className="m-4 p-4 w-64 h-auto border rounded-lg shadow-lg overflow-hidden">
      {/* Check for poster_path */}
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-72 object-cover rounded-lg mb-4"
        />
      ) : (
        <div className="w-full h-72 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
          No Image Available
        </div>
      )}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
        <p className="text-sm text-gray-500 mb-2">
          {movie.release_date ? movie.release_date.split("-")[0] : "Unknown Year"}
        </p>
        <p className="text-sm text-yellow-500 mb-4">
          Rating: {movie.vote_average ? movie.vote_average : "N/A"} / 10
        </p>
        {/* Book Now button */}
        <button
          onClick={handleBookNow} // Trigger handleBookNow on click
          className="px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition duration-300"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
