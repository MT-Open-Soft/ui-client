import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieDetail from './YoutubePlayer';
import { useParams } from 'react-router-dom';
import Player from './Player';

const Preview = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState('');
  const [playVideo, setPlayVideo] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('You must be logged in to view this content.');
        return;
      }

      try {
        const response = await axios.get(`http://localhost:8080/api/v1/movies/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setMovie(response.data);

      } catch (error) {
        console.error("Failed to load movie:", error);
        setError('Failed to load content. Please try again later.');
      }
    };
    fetchMovie();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }
  const handlePlayVideo = (shouldPlay) => {
    // Check if movie is premium and not purchased
    if (movie.premium && !movie.isPurchased) {
      setError('This content is premium. Please upgrade your pack to view.');
      return; // Stop execution here so player does not open
    }
    setPlayVideo(shouldPlay);
  };

  if (playVideo && movie) {
    return (
      <Player
        onClose={() => setPlayVideo(false)}
        title={movie.title}
      />
    );
  }

  return (
    movie ? <MovieDetail movie={movie} handlePlayVideo={handlePlayVideo} /> : <div>Loading...</div>
  );

};

export default Preview;