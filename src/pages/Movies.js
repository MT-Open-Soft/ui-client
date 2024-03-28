import React, { useState,useEffect } from "react";
import Card from "./Card";
import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";
//import Carousel from "./Carousel";
import axios from 'axios';
import { CgPlayButtonO } from "react-icons/cg";

const apiURL="http://localhost:8080/api/v1/search/suggestions"
function Movies() {

  
     const [movies, setMovies] = useState([]);

     
     searchResults.forEach((result) => {
      setMovies.push(result);
    });

     const [searchQuery, setSearchQuery] = useState("");
     const [searchResults, setSearchResults] = useState([]);
   
     const handleSearch = (query) => {
       setSearchQuery(query);
   
       if (query !== "") {
         axios.get(`${apiURL}?query=${query}`)
           .then((res) => {
             console.log(res.data)
             setSearchResults(res.data); // Assuming the response is an array of results
           })
           .catch((error) => {
             console.error("Request failed:", error);
           });
       } else {
         setSearchResults([]);
       }
     };
   
     const handleInputChange = (e) => {
       const query = e.target.value;
       handleSearch(query);
     };
   
     const handleSelectResult = (result) => {
       setSearchQuery(result.title);
       setSearchResults([]);
     };
   
 
 
  const [startIndex, setStartIndex] = useState(0);

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
    movies[(startIndex + 5) % movies.length],
  ];

  return (
    <>
      <div className="bg-[#131720]">
        <h1 className="text-white text-2xl my-[10px]">Movies List</h1>
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
              genre={card.type}
              rating={card.imdb.rating}
              year={card.year}
              status={card.plot}
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
      <div className="bg-[#131720]">
        <h1>Movies List</h1>
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
              genre={card.type}
              rating={card.imdb.rating}
              year={card.year}
              status={card.plot}
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
      <div className="bg-[#131720]">
        <h1>Movies List</h1>
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
              genre={card.type}
              rating={card.imdb.rating}
              year={card.year}
              status={card.plot}
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
}

export default Movies;
