import React, { useState, useEffect } from 'react';
import { IoPlayCircleOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import axios from 'axios';



const moviesData = [
    {
            id: 1,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 2,
            image: "https://flixtv.volkovdesign.com/main/img/card/15.png",
            title: "Psychological films",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 3,
            image: "https://flixtv.volkovdesign.com/main/img/card/3.png",
            title: "Films about space",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 4,
            image: "https://flixtv.volkovdesign.com/main/img/card/1.png",
            title: "Romantic Movies",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 5,
            image: "https://flixtv.volkovdesign.com/main/img/card/2.png",
            title: "Fairy tales",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 6,
            image: "https://flixtv.volkovdesign.com/main/img/card/17.png",
            title: "Best movies",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 7,
            image: "https://flixtv.volkovdesign.com/main/img/card/10.png",
            title: "Horror movies",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 8,
            image: "https://flixtv.volkovdesign.com/main/img/card/14.png",
            title: "Army Movies",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 9,
            image: "https://flixtv.volkovdesign.com/main/img/card/9.png",
            title: "Reality Shows",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 10,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 11,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 12,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 13,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 14,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 15,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 16,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 17,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 18,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 19,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "Vumika Ghosh",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 20,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 21,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 22,
            image: "https://flixtv.volkovdesign.com/main/img/card/15.png",
            title: "Ekansha",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 23,
            image: "https://flixtv.volkovdesign.com/main/img/card/3.png",
            title: "Films about space",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 24,
            image: "https://flixtv.volkovdesign.com/main/img/card/1.png",
            title: "Romantic Movies",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 25,
            image: "https://flixtv.volkovdesign.com/main/img/card/2.png",
            title: "Fairy tales",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 26,
            image: "https://flixtv.volkovdesign.com/main/img/card/17.png",
            title: "Best movies",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 27,
            image: "https://flixtv.volkovdesign.com/main/img/card/10.png",
            title: "Horror movies",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 28,
            image: "https://flixtv.volkovdesign.com/main/img/card/14.png",
            title: "Army Movies",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 29,
            image: "https://flixtv.volkovdesign.com/main/img/card/9.png",
            title: "Reality Shows",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 30,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 31,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 32,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 33,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 34,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 35,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 36,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 37,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 38,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 39,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 40,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 41,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 42,
            image: "https://flixtv.volkovdesign.com/main/img/card/15.png",
            title: "Psychological films",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 43,
            image: "https://flixtv.volkovdesign.com/main/img/card/3.png",
            title: "Films about space",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 44,
            image: "https://flixtv.volkovdesign.com/main/img/card/1.png",
            title: "Romantic Movies",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 45,
            image: "https://flixtv.volkovdesign.com/main/img/card/2.png",
            title: "Fairy tales",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 46,
            image: "https://flixtv.volkovdesign.com/main/img/card/17.png",
            title: "Best movies",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 47,
            image: "https://flixtv.volkovdesign.com/main/img/card/10.png",
            title: "Horror movies",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 48,
            image: "https://flixtv.volkovdesign.com/main/img/card/14.png",
            title: "Army Movies",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 49,
            image: "https://flixtv.volkovdesign.com/main/img/card/9.png",
            title: "open soft",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 50,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 51,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 52,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 53,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 54,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 55,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 56,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 57,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 58,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 59,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 60,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 61,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 62,
            image: "https://flixtv.volkovdesign.com/main/img/card/15.png",
            title: "Psychological films",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 63,
            image: "https://flixtv.volkovdesign.com/main/img/card/3.png",
            title: "Films about space",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 64,
            image: "https://flixtv.volkovdesign.com/main/img/card/1.png",
            title: "Romantic Movies",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 65,
            image: "https://flixtv.volkovdesign.com/main/img/card/2.png",
            title: "Fairy tales",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 66,
            image: "https://flixtv.volkovdesign.com/main/img/card/17.png",
            title: "Best movies",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 67,
            image: "https://flixtv.volkovdesign.com/main/img/card/10.png",
            title: "Horror movies",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 68,
            image: "https://flixtv.volkovdesign.com/main/img/card/14.png",
            title: "Army Movies",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 69,
            image: "https://flixtv.volkovdesign.com/main/img/card/9.png",
            title: "Reality Shows",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 70,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 71,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 72,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 73,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 74,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 75,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 76,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 77,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "Ishani Ghosh",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 78,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 79,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
          {
            id: 80,
            image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
            title: "The Good Lord Bird",
            genre: "Action",
            rating: "8.3",
            status: "Free",
            year: "2019",
          },
];

const Movies = () => {
    // const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage, setMoviesPerPage] = useState(20);

    // useEffect(() => {
    //     const fetchMovies = async () => {
    //       try {
    //         const response = await axios.get(`http://localhost:8080/api/v1/movies?page=${currentPage}&pageSize=${moviesPerPage}`);
    //         console.log(response.data);
    //         setMovies(response.data.movies); 
    //       } catch (error) {
    //         console.error('Error fetching movies:', error);
    //       }
    //     };
    
    //     fetchMovies(); 
    //   }, [currentPage]);


    const totalPages = Math.ceil(moviesData.length / moviesPerPage);
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = moviesData.slice(indexOfFirstMovie, indexOfLastMovie);
  
    // const handleLoadMore = () => {
    //   setMoviesPerPage(prevMoviesPerPage => prevMoviesPerPage + 20);
    // };
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    return (
      <div className="container mx-auto bg-[#131720] py-5">
        <h1 className="text-3xl text-white font-bold mb-4 px-5">Movies</h1>
        <div className="grid grid-cols-5 gap-4 pl-[50px]">
          {currentMovies.map((movie, index) => (
            <div key={index} className="w-[210px] h-[388px] rounded-2xl">
                <div className="w-210px h-388px rounded-2xl overflow-hidden shadow-lg relative group">
                    <img src={movie.image} alt={movie.title} className="w-full h-3/4 rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm" />
                    <div className="transition-all transform duration-500 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 absolute inset-0 flex items-center justify-center" >
                        <div className="p-2">
                          <IoPlayCircleOutline className="text-white text-6xl" />
                        </div>
                    </div>
                    <div className="rounded-2xl w-[60px] h-[35px] transition-all transform duration-500 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:bg-gray-700 absolute top-2 right-2 p-2 flex items-center justify-center" >
                        <div className="p-2 flex flex-row space-x-1">
                          <CiStar className="text-white text-xl" />
                          <p className='text-blue-400 text-sm text-bold'>{movie.rating} </p>
                        </div>
                    </div>
                </div>
                <div className="py-2 px-2 ">
                  <div className="text-white font-bold text-lg mb-2">{movie.title}
                  </div>
                  <div className="flex flex-row justify-start gap-x-3 ">
                    <p className="text-slate-200 text-xs">{movie.status}</p>
                    <p className="text-slate-200 text-xs">{movie.genre}</p>
                    <p className="text-slate-200 text-xs">{movie.year}</p>
                  </div>          
                </div>
            </div>
          ))}
        </div>
        {/* <div className="flex justify-center">
        {(currentPage < totalPages || currentMovies.length < moviesData.length) &&
          <button 
            className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 justify-center"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        }
        </div>
         */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`mx-2 py-2 px-4 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700 hover:bg-blue-500 hover:text-white'}`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default Movies;
