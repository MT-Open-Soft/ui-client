import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import MovieDetail from './YoutubePlayer';
import { useParams } from 'react-router-dom';

const Preview = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/movies/${id}`)
      .then(response => {
        setMovie(response.data); 
      })
      .catch(error => console.error("Failed to load movie:", error));
  }, [id]);

  return (
    <div>
      {movie && <MovieDetail key={movie.title} movie={movie} />}
    </div>
  );
};

export default Preview;
