import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import movieData from '../db.json'; // Import the JSON file

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movieData.movies); // Set movies from imported JSON
  }, []);

  return (
    <div className='movie-list'>
      {movies.map(movie => (
        <MovieCard
        key={movie.id}
        id={movie.id}
        title={movie.title}
        description={movie.description}
        posterURL={movie.posterURL}
        rating={movie.rating}
      />
      ))}
    </div>
  );
};

export default MovieList;
