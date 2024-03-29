import React, { useState,useEffect } from "react";
import Card from "./Card";
import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";
import { IoIosArrowForward } from "react-icons/io";
import axios from 'axios';
const apiURL="http://localhost:8080/api/v1/movies"

function RomanceMovies() {
    const [movies, setData] = useState([]);

    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const num_response=15;
          const genre="Romance";
          const response = await axios.get(`http://localhost:8080/api/v1/movies?page=1&pageSize=${num_response}&genres=${genre}`);
          console.log(response.data)
          setData(response.data.movies); // Assuming the response has a 'movies' property containing the movie data
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      };
  
      fetchMovies();
    }, []);
    

   


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
    

    <div>
    {/* {handleSearch} */}
    {movies.length > 0 ? (
      <div className="bg-[#152238]">
      <div className="flex items-center space-x-10 px-8 py-4 ml-5 mt-8">
            <h1 className="text-white text-3xl flex items-center">
                Movies In&nbsp; <span className="font-bold text-yellow-500">Romance</span>
            </h1>
            <a href="#" className="text-white text-xl flex items-center pt-1">
                See more
                <span className=" text-2xl pt-1"><IoIosArrowForward className="text-white" /></span>
            </a>
        </div>
        <div className="flex space-x-4 overflow-x-auto mt-4 justify-evenly items-center" style={{overflow: 'visible'}}>
            {startIndex !==0 && (
                <button
                onClick={handlePrev}
                disabled={startIndex === 0}
                className="text-white text-2xl"
              >
                <SlArrowLeftCircle />
              </button>
            )}
          
          {visibleMovies.map((card) => (
           <Card
           key={card.id}
           image={card.poster}
           title={card.title}
           rating={card.imdbRating}
           year={card.releaseYear}
           status={card.premium}
         />
          ))}
          {startIndex < movies.length - 5 && (
            <button
            onClick={handleNext}
            disabled={startIndex >= movies.length - 6}
            className="text-white text-2xl"
          >
            <SlArrowRightCircle />
          </button>
          )}
          
        </div>
      </div>
       ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );

  //return <Carousel slides={movies} />;
}

export default RomanceMovies;
