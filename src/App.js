import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const addMovie = (movie) => {
    setMovies(prevMovies => [...prevMovies, movie]);
  };

  const filterMovies = ({ title, rating }) => {
    let filtered = movies;
    if (title) {
      filtered = filtered.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
    }
    if (rating) {
      filtered = filtered.filter(movie => movie.rating >= parseFloat(rating));
    }
    setFilteredMovies(filtered);
  };

  return (
    <div className="App">
      <h1>Movie App</h1>
      <AddMovie onAdd={addMovie} />
      <Filter onFilter={filterMovies} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
