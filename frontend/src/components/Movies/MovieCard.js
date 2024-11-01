// src/components/Movies/MovieCard.js
import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg m-4 p-4">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-auto rounded"
      />
      <h3 className="text-xl font-semibold mt-2">{movie.title}</h3>
      <p className="text-gray-600">{movie.overview}</p>
    </div>
  );
};

export default MovieCard;
