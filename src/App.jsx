import React, { useState } from "react";


function Movie({ name, rating, onDelete }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{'⭐'.repeat(rating)}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}



export default function App() {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [movies, setMovies] = useState([]);




  function addMovie() {
    if (name === '') return;

    const newMovie = {
      id: Date.now(),
      name: name,
      rating: Number(rating),
    };

    setMovies([...movies, newMovie]);
    setName('');
  }





  return (
    <div>
      <h1>Movie Watch List</h1>

      <input
        placeholder="Movie name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        <option value="1">1 Star</option>
        <option value="2">2 Stars</option>
        <option value="3">3 Stars</option>
        <option value="4">4 Stars</option>
        <option value="5">5 Stars</option>
      </select>

      <button onClick={addMovie}>Add Movie</button>

      <h2>Watched Movies</h2>

      {movies.length === 0 && <p>No movies yet</p>}

      {movies.map((movie) => (
        <Movie
          key={movie.id}
          name={movie.name}
          rating={movie.rating}

          onDelete={() => setMovies(movies.filter((m) => m.id !== movie.id))}
          
        />
      ))}
    </div>
  );
}
