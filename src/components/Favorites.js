import React from 'react';
import { CgPlayButtonO } from "react-icons/cg";


const FavoriteMovies = ({ movies }) => {
  return (
    <div className="grid grid-cols-6 gap-4 justify-center text-white">
      {movies.map((movie, index) => (
        <div key={index} className="flex flex-col items-center">
        <div className="relative ">
          <img
            src={movie.poster}
            alt={movie.name}
            className="w-40 h-auto cursor-pointer transition-transform transform hover:scale-105 hover:blur-sm w-full h-full object-cover rounded-lg"
          />
          <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
          <CgPlayButtonO  className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 duration-100" />
            </button>
        </div>
          <div className="mt-2 text-center">
            <p className="font-bold">{movie.name}</p>
            <p>{movie.genre} ({movie.year})</p>
            
          </div>
        </div>
      ))}
    </div>
  );
};



const Favorites = () => {
    const movies = [
        {
          name: 'Movie 1',
          genre: 'Action',
          year: 2021,
          poster: "https://image.tmdb.org/t/p/original/87jZEVp4FW6GwTx56mbbqIQQF75.jpg",
        },
        {
          name: 'Movie 2',
          genre: 'Comedy',
          year: 2020,
          poster: "https://image.tmdb.org/t/p/original/87jZEVp4FW6GwTx56mbbqIQQF75.jpg",
        },
        {
            name: 'Movie 1',
            genre: 'Action',
            year: 2021,
            poster: "https://image.tmdb.org/t/p/original/87jZEVp4FW6GwTx56mbbqIQQF75.jpg",
          },
          {
            name: 'Movie 2',
            genre: 'Comedy',
            year: 2020,
            poster: "https://image.tmdb.org/t/p/original/87jZEVp4FW6GwTx56mbbqIQQF75.jpg",
          },
          {
            name: 'Movie 1',
            genre: 'Action',
            year: 2021,
            poster: "https://image.tmdb.org/t/p/original/87jZEVp4FW6GwTx56mbbqIQQF75.jpg",
          },
          {
            name: 'Movie 2',
            genre: 'Comedy',
            year: 2020,
            poster: "https://image.tmdb.org/t/p/original/87jZEVp4FW6GwTx56mbbqIQQF75.jpg",
          },
          {
            name: 'Movie 1',
            genre: 'Action',
            year: 2021,
            poster: "https://image.tmdb.org/t/p/original/87jZEVp4FW6GwTx56mbbqIQQF75.jpg",
          },
          {
            name: 'Movie 2',
            genre: 'Comedy',
            year: 2020,
            poster: "https://image.tmdb.org/t/p/original/87jZEVp4FW6GwTx56mbbqIQQF75.jpg",
          },
        // Add more movies as needed
      ];
    
      return (
        <div>
          <h1 className="text-2xl text-white font-bold text-center my-4">Favorite Movies</h1>
          <FavoriteMovies movies={movies} />
        </div>
      );
    };

export default Favorites;
