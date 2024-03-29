import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import CardLang from './CardLang.js';
import Card from '../pages/Card.js';
import { SlArrowRightCircle,SlArrowLeftCircle } from 'react-icons/sl';
const apiURL ="http://localhost:8080/api/v1/movies";

function LanguageMovies() {
    const location = useLocation();
    const pathname = location.pathname;
    const language = pathname.substring(10); 

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
          setLoading(false);
        }
      };
  
      fetchMovies();
    }, [language]);
  
    const [startIndex, setStartIndex] = useState(0);
// 
  const handleNext = () => {
    const newIndex = (startIndex + 6) % movies.length;
    setStartIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = (startIndex - 6 + movies.length) % movies.length;
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
    

    <>
    {/* {handleSearch} */}
    {movies.length > 0 ? (
      <div className="bg-[#131720]">
      <h1 className="text-white text-4xl py-4 px-8 flex mt-4 justify-right ">Movies In {language}</h1>
        <div className="flex space-x-4 overflow-x-auto mt-4 justify-evenly">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="text-white"
          >
            <SlArrowLeftCircle />
          </button>
          {visibleMovies.map((card) => (
            <Card
              key={card.id}
              image={card.poster}
              title={card.title}
              genre={card.genre}
              rating={card.rating}
              year={card.year}
              status={card.status}
            />
          ))}
          <button
            onClick={handleNext}
            disabled={startIndex >= movies.length - 6}
            className="text-white"
          >
            <SlArrowRightCircle />
          </button>
        </div>
      </div>
       ) : (
        <h1>Loading...</h1>
      )}
    </>
  );

  //return <Carousel slides={movies} />;
}

export default LanguageMovies;
