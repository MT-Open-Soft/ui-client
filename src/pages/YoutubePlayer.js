import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

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
    <div className={`relative bg-black text-white ${playVideo ? 'min-h-screen' : 'min-h-screen'} flex flex-col justify-end`}>
      <div className="absolute inset-0">
        {!playVideo ? (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://img.youtube.com/vi/${movie.youtubeId}/maxresdefault.jpg')`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex justify-center items-center">
              <FontAwesomeIcon icon={faPlayCircle} size="3x" className="text-white cursor-pointer hover:text-gray-300 transition duration-300 ease-in-out" onClick={handlePlayClick} />
            </div>
          </div>
        ) : (
          <iframe
            style={{ width: "100%", height: "100%", border: "none" }} // Use style attribute for border styling
            src={`https://www.youtube.com/embed/${movie.youtubeId}?autoplay=1&rel=0&mute=1`}
            title="YouTube video player"
            
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      {!playVideo && (
        <div className="relative p-8 z-10">
          <h1 className="text-4xl font-bold mb-4">{movie.name}</h1>
          <p className="mb-4 text-lg">
            {movie.year} • {movie.imdbRating} • {movie.duration}
          </p>
          <p className="mb-2 text-lg"><strong>Stars:</strong> {movie.stars.join(", ")}</p>
          <p className="mb-4 text-lg"><strong>Brief Plot:</strong> {movie.briefPlot}</p>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;