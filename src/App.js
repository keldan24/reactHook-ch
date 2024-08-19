import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import MovieDetails from './components/MovieDetails';
import './App.css';
import movieData from './db.json'; // Import your local JSON data

const App = () => {
  const [movies, setMovies] = useState(movieData || []); // Initialize with movie data
  const [filteredMovies, setFilteredMovies] = useState(movieData || []); // Initialize with movie data

  const addMovie = (movie) => {
    setMovies(prevMovies => [...prevMovies, movie]);
    setFilteredMovies(prevMovies => [...prevMovies, movie]);
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
    <Router>
      <div className="app">
        <h1>Movie App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add">Add Movie</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <>
              <Filter onFilter={filterMovies} />
              <MovieList movies={filteredMovies} />
            </>
          } />
          <Route path="/add" element={<AddMovie onAdd={addMovie} />} />
          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
