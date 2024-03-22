import React, { useState,useEffect } from "react";
// import Card from "./Card";
// import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";
//import Carousel from "./Carousel";
import axios from 'axios';

const Movies = () => {
    const [_id, setMovies] = useState([]);

    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const response = await axios.get('https://4a06-203-110-242-44.ngrok-free.app/api/v1/search/');
          console.log(response.data._id)
          setMovies(response.data._id); // Assuming the response has a 'movies' property containing the movie data
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      };
  
      fetchMovies();
    }, []);
  

  // const movies = [
  //   {
  //     id: 1,
  //     image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
  //     title: "The Good Lord Bird",
  //     genre: "Action",
  //     rating: "8.3",
  //     status: "Free",
  //     year: "2019",
  //   },
  //   {
  //     id: 2,
  //     image: "https://flixtv.volkovdesign.com/main/img/card/15.png",
  //     title: "Psychological films",
  //     genre: "Action",
  //     rating: "8.3",
  //     status: "Free",
  //     year: "2019",
  //   },
  //   {
  //     id: 3,
  //     image: "https://flixtv.volkovdesign.com/main/img/card/3.png",
  //     title: "Films about space",
  //     genre: "Action",
  //     rating: "8.3",
  //     status: "Free",
  //     year: "2019",
  //   },
  //   {
  //     id: 4,
  //     image: "https://flixtv.volkovdesign.com/main/img/card/1.png",
  //     title: "Romantic Movies",
  //     genre: "Action",
  //     rating: "8.3",
  //     status: "Free",
  //     year: "2019",
  //   },
  //   {
  //     id: 5,
  //     image: "https://flixtv.volkovdesign.com/main/img/card/2.png",
  //     title: "Fairy tales",
  //     genre: "Action",
  //     rating: "8.3",
  //     status: "Free",
  //     year: "2019",
  //   },
  //   {
  //     id: 6,
  //     image: "https://flixtv.volkovdesign.com/main/img/card/17.png",
  //     title: "Best movies",
  //     genre: "Action",
  //     rating: "8.3",
  //     status: "Free",
  //     year: "2019",
  //   },
  //   {
  //     id: 7,
  //     image: "https://flixtv.volkovdesign.com/main/img/card/10.png",
  //     title: "Horror movies",
  //     genre: "Action",
  //     rating: "8.3",
  //     status: "Free",
  //     year: "2019",
  //   },
  //   {
  //     id: 8,
  //     image: "https://flixtv.volkovdesign.com/main/img/card/14.png",
  //     title: "Army Movies",
  //     genre: "Action",
  //     rating: "8.3",
  //     status: "Free",
  //     year: "2019",
  //   },
  //   {
  //     id: 9,
  //     image: "https://flixtv.volkovdesign.com/main/img/card/9.png",
  //     title: "Reality Shows",
  //     genre: "Action",
  //     rating: "8.3",
  //     status: "Free",
  //     year: "2019",
  //   },
  // ];

  // const [startIndex, setStartIndex] = useState(0);

  // const handleNext = () => {
  //   const newIndex = (startIndex + 6) % movies.length;
  //   setStartIndex(newIndex);
  // };

  // const handlePrev = () => {
  //   const newIndex = (startIndex - 6 + movies.length) % movies.length;
  //   setStartIndex(newIndex);
  // };

  // const visibleMovies = [
  //   movies[startIndex % movies.length],
  //   movies[(startIndex + 1) % movies.length],
  //   movies[(startIndex + 2) % movies.length],
  //   movies[(startIndex + 3) % movies.length],
  //   movies[(startIndex + 4) % movies.length],
  //   movies[(startIndex + 5) % movies.length],
  // ];

  // return (
  //   <>
  //     <div className="bg-[#131720]">
  //       <h1 className="text-white text-2xl my-[10px]">Movies List</h1>
  //       <div className="flex space-x-4 overflow-x-auto mt-4 justify-evenly">
  //         <button
  //           onClick={handlePrev}
  //           disabled={startIndex === 0}
  //           className="text-white"
  //         >
  //           <SlArrowLeftCircle />
  //         </button>
  //         {visibleMovies.map((card) => (
  //           <Card
  //             key={card.id}
  //             image={card.image}
  //             title={card.title}
  //             genre={card.genre}
  //             rating={card.rating}
  //             year={card.year}
  //             status={card.status}
  //           />
  //         ))}
  //         <button
  //           onClick={handleNext}
  //           disabled={startIndex >= movies.length - 6}
  //           className="text-white"
  //         >
  //           <SlArrowRightCircle />
  //         </button>
  //       </div>
  //     </div>
  //     <div className="bg-[#131720]">
  //       <h1>Movies List</h1>
  //       <div className="flex space-x-4 overflow-x-auto mt-4 justify-evenly">
  //         <button
  //           onClick={handlePrev}
  //           disabled={startIndex === 0}
  //           className="text-white"
  //         >
  //           <SlArrowLeftCircle />
  //         </button>
  //         {visibleMovies.map((card) => (
  //           <Card
  //             key={card.id}
  //             image={card.image}
  //             title={card.title}
  //             genre={card.genre}
  //             rating={card.rating}
  //             year={card.year}
  //             status={card.status}
  //           />
  //         ))}
  //         <button
  //           onClick={handleNext}
  //           disabled={startIndex >= movies.length - 6}
  //           className="text-white"
  //         >
  //           <SlArrowRightCircle />
  //         </button>
  //       </div>
  //     </div>
  //     <div className="bg-[#131720]">
  //       <h1>Movies List</h1>
  //       <div className="flex space-x-4 overflow-x-auto mt-4 justify-evenly">
  //         <button
  //           onClick={handlePrev}
  //           disabled={startIndex === 0}
  //           className="text-white"
  //         >
  //           <SlArrowLeftCircle />
  //         </button>
  //         {visibleMovies.map((card) => (
  //           <Card
  //             key={card.id}
  //             image={card.image}
  //             title={card.title}
  //             genre={card.genre}
  //             rating={card.rating}
  //             year={card.year}
  //             status={card.status}
  //           />
  //         ))}
  //         <button
  //           onClick={handleNext}
  //           disabled={startIndex >= movies.length - 6}
  //           className="text-white"
  //         >
  //           <SlArrowRightCircle />
  //         </button>
  //       </div>
  //     </div>
  //   </>
  // );

 // return <Carousel slides={movies} />;

 return (
  <div className="grid grid-cols-3 gap-4">
    {_id.map(movie => (
      <div key={movie._id} className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={movie.poster} alt={movie.title} className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{movie.title}</div>
          <p className="text-gray-700 text-base">{movie.genres}</p>
          <p className="text-gray-700 text-base">{movie.rating}</p>
          <p className="text-gray-700 text-base">{movie.status}</p>
          <p className="text-gray-700 text-base">{movie.year}</p>
        </div>
      </div>
    ))}
  </div>
);
}

export default Movies;
