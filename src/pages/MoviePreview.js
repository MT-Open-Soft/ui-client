import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import MovieDetail from './YoutubePlayer'; // Ensure this path is correct

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Use axios.get() instead of fetch()
    axios.get("http://localhost:8080/api/v1/movies/573a1392f29313caabcd9c1b")
      .then(response => {
        setMovies([response.data]); 
      })
      .catch(error => console.error("Failed to load movies:", error));
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <MovieDetail key={movie.title} movie={movie} />
      ))}
    </div>
  );
};

export default App;