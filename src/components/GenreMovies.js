import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Card from '../pages/Card.js';
import { SlArrowRightCircle, SlArrowLeftCircle } from 'react-icons/sl';

const apiURL = "http://localhost:8080/api/v1/movies";
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-10">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
    <div className="ml-3 text-white">Loading...</div>
  </div>
);

function GenreMovies() {
  const location = useLocation();
  const pathname = location.pathname;
  const genre = pathname.substring(1);

  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalpages, setTotalpages] = useState(1);
  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${apiURL}?page=1&pageSize=20&genres=${genre}`);
        const totalpages = response.data.totalPages;
        console.log(totalpages);
  
        const pagesData = [response.data.movies];
        setTotalpages(totalpages);
        setPages(pagesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    };
  
    fetchMovies();
  }, [genre]);

  const fetchNextPage = async () => {
    try {
      const response = await axios.get(`${apiURL}?page=${currentPage + 1}&pageSize=20&genres=${genre}`);
      const newPageData = response.data.movies;
      setPages((prevPages) => [...prevPages, newPageData]);
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error('Error fetching next page:', error);
    }
  };

  const handleNext = () => {
    if (currentPage < totalpages) {
      fetchNextPage();
    }
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className='py-10 bg-[#152238]'>
      {pages.length > 0 ? (
        <div className="bg-[#152238] justify-center ">
          <div className="h-screen/4 flex flex-col justify-end pb-16" style={{
            backgroundImage: " linear-gradient(to bottom, rgba(6, 12, 23, 1), rgba(12, 19, 31, 0.7), rgba(16, 24, 39, 0.7), rgba(18, 29, 47, 0.85), rgba(21, 34, 56, 1)), url('https://img.freepik.com/free-photo/movie-background-collage_23-2149876003.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            <h1 className="text-white text-5xl mt-10 flex justify-center ml-20 "> Movies In&nbsp; <span className=" text-yellow-500"> {genre.charAt(0).toUpperCase() + genre.slice(1)} </span></h1>
          </div>

          <div className='flex mt-4 justify-evenly pb-10'>
            <div className=" grid grid-cols-5 mt-5 justify-center gap-12">
              {pages[currentPage - 1]?.map((card) => (
                <div key={card._id}>
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
          {(currentPage !== 1) ? (
            <div className="flex  space-x-18 mt-2 ml-16 mr-16 justify-between">
              {(currentPage !== 1) && (
                <button onClick={handlePrev} className="text-white flex h-16"><SlArrowLeftCircle size={24} />&nbsp;Previous</button>
              )}
              {(currentPage !== totalpages) && (
                <button onClick={handleNext} className="flex text-white align-end justify-end">Next &nbsp;<SlArrowRightCircle size={24} /></button>
              )}
            </div>
          ) : (
            <div className='flex justify-end mr-16'>
              <button onClick={handleNext} className="flex text-white">
                Next &nbsp;<SlArrowRightCircle size={24} />
              </button>
            </div>
          )}

        </div>
      ) : (
        <h1 className='bg-[#152238] text-white'><LoadingSpinner /></h1>
      )}
    </div>
  );
}

export default GenreMovies;
