import React, { useState,useEffect } from "react";
import Card from "./Card";
import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";
//import Carousel from "./Carousel";
import axios from 'axios';
const apiURL="http://localhost:8080/api/v1/movies"
function Movies() {
    const [movies, setData] = useState([]);

    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const num_response=10;
          const genre="Action";
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
    

    <>
    {/* {handleSearch} */}
      <div className="bg-[#131720]">
      <h1 className="text-white text-4xl py-4 px-8 flex mt-4 justify-right ">Movies In "Action"</h1>
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
    </>
  );

  //return <Carousel slides={movies} />;
}

export default Movies;
