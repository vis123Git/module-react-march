import React, { useState } from 'react';
import MovieList from './MovieList';
import GenreFilter from './GenreFilter';
import { movies, genres } from './data'; 
import "./App.css"

function App() {
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleGenreSelect = (genre) => {
    console.log("Filtering by ",genre); 
    const filtered = movies.filter(movie => movie.genre === genre);
    setFilteredMovies(filtered);
  };

  return (
    <div className='main-div'>
      <h1>Top 15 Movies of All Time</h1>
      <GenreFilter genres={genres} onGenreSelect={handleGenreSelect} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
