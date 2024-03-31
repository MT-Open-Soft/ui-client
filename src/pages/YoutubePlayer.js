import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FaStar } from "react-icons/fa";
import Player from './Player';
import Swal from 'sweetalert2';


const MovieDetail = ({ movie }) => {
  const token = localStorage.getItem('token');
  const subscription = localStorage.getItem('subscription');

  const [isPlayerVisible, setIsPlayerVisible] = useState(false);

  const handlePlayVideo = () => {
    if (!token) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...You must be logged in to view this content',
        toast: true,
        html: '<a href="/login" class="text-blue-500 hover:underline">Login now</a>'
      });
      return;
    }
    if (movie.premium && subscription === 'FREE') {
      Swal.fire({
        icon: 'warning',
        title: 'Premium Content',
        text: 'This content is premium. Please upgrade your pack to view.',
        html: '<a href="/plans" class="text-blue-500 hover:underline">Upgrade now</a>',
        toast: true
      });
      return;
    }
    setIsPlayerVisible(true); // Show player
  };

  const handleCloseVideo = () => {
    setIsPlayerVisible(false); // Hide player
  };


  return (
    <div className={`relative bg-black text-white flex flex-col min-h-screen justify-end`}
      style={{
        backgroundImage: `url('${movie.thumbnail}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <FontAwesomeIcon icon={faPlayCircle} size="3x" className="text-white cursor-pointer hover:text-gray-300 transition duration-300 ease-in-out" onClick={handlePlayVideo} />
        </div>
        {isPlayerVisible && <Player onClose={handleCloseVideo} title={movie.title} />}
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
    </div>
  );
};

export default MovieDetail;

