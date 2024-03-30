import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FaStar } from "react-icons/fa";


const MovieDetail = ({ movie }) => {
  const [playVideo, setPlayVideo] = useState(false);

  const handleFullscreenChange = () => {
    if (!document.fullscreenElement) {
      setPlayVideo(false);
    }
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const handlePlayClick = () => {
    if (document.fullscreenEnabled) {
      document.documentElement.requestFullscreen();
    }
    setPlayVideo(true);
  };

  return (
    <div className={`relative bg-black text-white ${playVideo ? 'min-h-screen' : 'min-h-screen'} flex flex-col justify-end`}
         style={{
           backgroundImage: `url('${movie.thumbnail}')`, // Use movie.thumbnail for background image
           backgroundSize: 'cover', // Ensure it covers the whole area
           backgroundPosition: 'center' // Center the background image
         }}>
      {!playVideo && (
        <>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex justify-center items-center">
            <FontAwesomeIcon icon={faPlayCircle} size="3x" className="text-white cursor-pointer hover:text-gray-300 transition duration-300 ease-in-out" onClick={handlePlayClick} />
          </div>
          <div className="relative p-8 z-10">
            <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
            <p className="mb-4 text-lg">
              {movie.releaseYear} • ☆ {movie.imdbRating} • {movie.runtimeInMinutes} mins
            </p>
            {/* Uncomment and adjust as needed */}
            {/*<p className="mb-2 text-lg"><strong>Stars:</strong> {movie.stars.join(", ")}</p>*/}
            <p className="mb-4 text-lg"><strong>Overview:</strong> {movie.plot}</p>
          </div>
        </>
      )}
      {/* {playVideo && (
        <iframe
          style={{ width: "100%", height: "100%", border: "none" }}
          src={`https://www.youtube.com/embed/${movie.youtubeId}?autoplay=1&rel=0&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )} */}
    </div>
  );
};

export default MovieDetail;

