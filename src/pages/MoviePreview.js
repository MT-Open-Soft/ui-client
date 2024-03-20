import React from 'react';
import MovieDetail from './YoutubePlayer';

const App = () => {
  const movies = [
    {
      name: "La La Land",
      briefPlot: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
      year: "2016",
      imdbRating: "8.0",
      duration: "2h 8min",
      stars: ["Ryan Gosling", "Emma Stone"],
      youtubeId: "Kn9FJsNOaUU", // Example YouTube video ID
    }
  ];

  return (
    <div>
      {movies.map((movie) => (
        <MovieDetail key={movie.name} movie={movie} />
      ))}
    </div>
  );
};

export default App;