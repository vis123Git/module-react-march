import React from 'react';

function GenreFilter({ genres, onGenreSelect }) {
  return (
    <div>
        <h4>Filter by Genre</h4>
      {genres.map((genre, index) => (
        <button key={index} onClick={() => onGenreSelect(genre)}>
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreFilter;
