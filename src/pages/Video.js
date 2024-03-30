import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import { CgPlayButtonO } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ActiveSlider = () => {
  const [serviceData, setServiceData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/movies/toprated?type=movie`
        );
        const movies = response.data.map((movie) => ({
          _id: movie._id,
          title: movie.title,
          content: movie.overview,
          backgroundImage: movie.poster,
          type: movie.premium,
          rating: movie.imdbrating,
          icon: () => { },
        }));
        setServiceData(movies);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies();
  }, []);
  const token = localStorage.getItem('token');

  const handleNavigate = (id) => {
    if (token) {
    navigate(`/movie/${id}`);
    }
    else
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...You must be logged in to view this content',
        toast: true,
        html: '<a href="/login" class="text-blue-500 hover:underline">Login now</a>'
      });
      return;
    }
  };

  return (
    <div className="flex items-center justify-center flex-col bg-[#152238]">
      <h1 className="text-5xl font-medium mb-4 text-white">
        <span className="text-yellow-500">Top-Rated</span>&nbsp;Movies
      </h1>
      <p className="text-white mb-10">
        Experience the Best: Dive into Our Top-Rated Movie Selection!
      </p>

      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, FreeMode, Pagination, Navigation]}
        loop={true}
        autoplay={{
          delay: 1000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        className="max-w-[90%] lg:max-w-[90%]"
      >
        {serviceData.map((item) => (
          <SwiperSlide key={item.title} onClick={() => handleNavigate(item._id)}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[220px] w-[175px] lg:h-[250px] lg:w-[300px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover filter group-hover:blur-sm transition duration-500  "
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50 transition-opacity duration-150 ease-in-out" />
              <div className="absolute bottom-0 left-0 w-full p-2 bg-black bg-opacity-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <item.icon className="text-blue-600 group-hover:text-blue-500 w-[32px] h-[32px] mx-auto" />
                <h1 className="text-xl lg:text-xl text-center ">
                  {item.title}
                </h1>
                <p className="lg:text-[18px] text-center">{item.content}</p>
              </div>
              <div onClick={(e) => { e.stopPropagation(); handleNavigate(item._id); }}>
                <CgPlayButtonO className="absolute bottom-5 left-5 w-[35px] h-[35px] text-6xl text-white group-hover:top-1/2 group-hover:left-1/2 group-hover:-translate-x/-translate-y transition-all duration-500" />
              </div>       
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;
