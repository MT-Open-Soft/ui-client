import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const MovieDetail = () => {
  // Static movie data for demonstration
  const movie = {
    name: "La La Land",
    briefPlot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    year: "2010",
    imdbRating: "8.8",
    duration: "2h 28min",
    stars: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
  };

  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col justify-end">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f8b2ef92655071.5e505bf7132ab.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      {/* Content */}
      <div className="relative p-8">
        <div className="mt-8 flex items-center">
          <FontAwesomeIcon icon={faPlayCircle} size="3x" className="text-white-600 hover:text-white-700 transition duration-300 ease-in-out" />
          <span className="ml-2 text-xl">Watch Movie</span>
        </div>
        <br></br>

        <h1 className="text-4xl font-bold mb-4">{movie.name}</h1>
        {/* Details in one line */}
        <p className="mb-4 text-lg">
          {movie.year} • {movie.imdbRating} • {movie.duration}
        </p>
        <p className="mb-2 text-lg"><strong>Stars:</strong> {movie.stars.join(", ")}</p>
        <p className="mb-4 text-lg"><strong>Brief Plot:</strong> {movie.briefPlot}</p>
      </div>
    </div>
  );
};

export default MovieDetail;