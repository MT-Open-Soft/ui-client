import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import CardLang from './CardLang.js';
import Card from '../pages/Card.js';
import { SlArrowRightCircle,SlArrowLeftCircle } from 'react-icons/sl';
const apiURL ="http://localhost:8080/api/v1/movies";
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-10">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
    <div className="ml-3 text-white">Loading...</div>
  </div>
);
function LanguageMovies() {
    const location = useLocation();
    const pathname = location.pathname;
    const language = pathname.substring(6);
  console.log(language)
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    let langMovies=[]
    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const response = await axios.get(`${apiURL}?pageSize=${20}&languages=${language}`);
          langMovies=response.data.movies;
          console.log(langMovies)
          setMovies(langMovies);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching movies:', error);
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        }
      };
  
      fetchMovies();
    }, [language]);
  
    const [startIndex, setStartIndex] = useState(0);
// 
  const handleNext = () => {
    const newIndex = (startIndex + 5) % movies.length;
    setStartIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = (startIndex - 5 + movies.length) % movies.length;
    setStartIndex(newIndex);
  };

  const visibleMovies = [
    movies[startIndex % movies.length],
    movies[(startIndex + 1) % movies.length],
    movies[(startIndex + 2) % movies.length],
    movies[(startIndex + 3) % movies.length],
    movies[(startIndex + 4) % movies.length],
  
  ];


  return (
    

    <div>
    {movies.length > 0 ? (
      <div className="bg-[#152238] justify-center ">
          <div className="h-screen/4 flex flex-col justify-end pb-16" style={{
      backgroundImage: " linear-gradient(to bottom, rgba(6, 12, 23, 1), rgba(12, 19, 31, 0.7), rgba(16, 24, 39, 0.7), rgba(18, 29, 47, 0.85), rgba(21, 34, 56, 1)), url('https://img.freepik.com/free-photo/movie-background-collage_23-2149876003.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
            <h1 className="text-white text-5xl mt-10 flex justify-center ml-20 "> Movies In&nbsp; <span className=" text-yellow-500"> {language.charAt(0).toUpperCase() + language.slice(1)} </span></h1>

    </div>
        <div className='flex mt-4 justify-evenly pb-10'>
        <div className=" grid grid-cols-5 mt-5 justify-center gap-12">
          
          {movies.map((card) => (
            <div>
              <Card
              id={card._id}
              image={card.poster ? card.poster : 'https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg'}
              title={card.title}
              rating={card.imdbRating}
              year={card.releaseYear}
              status={card.premium}
            />
            </div>
          ))}
          
        </div>
        </div>
      </div>
       ) : (
        <h1 className='bg-[#152238] text-white'><LoadingSpinner /></h1>
      )}
    </div>
  );

  //return <Carousel slides={movies} />;
}

export default LanguageMovies;
