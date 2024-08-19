import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = () => {
      // Ensure movies is an array and find the movie by ID
      if (Array.isArray(movies)) {
        const movieId = parseInt(id, 10);
        const foundMovie = movies.find(movie => movie.id === movieId);

        if (foundMovie) {
          setMovie(foundMovie);
        } else {
          setError('Movie not found');
        }
      } else {
        setError('Movies data is not available');
      }
    };

    fetchMovie();
  }, [id, movies]);

  if (error) {
    return (
      <div>
        <h1>Error: {error}</h1>
        <Link to="/">Go Back</Link>
      </div>
    );
  }

  if (!movie) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="movie-details">
      <img src={movie.posterURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
      {movie.trailerURL && (
        <iframe
          width="560"
          height="315"
          src={movie.trailerURL}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Movie Trailer"
        ></iframe>
      )}
      <Link to="/">Back to Home</Link>
    </div>
  );
};

MovieDetails.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      posterURL: PropTypes.string,
      rating: PropTypes.number.isRequired,
      trailerURL: PropTypes.string,
    })
  ).isRequired,
};

export default MovieDetails;
