import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { FreeMode, Pagination, Autoplay, Navigation} from "swiper/modules";
import { CgPlayButtonO } from "react-icons/cg";



const ActiveSlider = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/movies/toprated?type=movie`);
        const movies = response.data.map(movie => ({
          title: movie.title,
          content: movie.overview,
          backgroundImage: movie.poster,
          icon: () => {}
        }));
        setServiceData(movies);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies();
  }, []);
  
  return (
    <div className="flex items-center justify-center flex-col h-[700px] bg-[#152238]" id="top-rated">
      <h1 className="text-5xl font-medium mb-4 text-white">
        <span className="text-yellow-500">Top-Rated</span>&nbsp;Movies
      </h1>
      <p className="text-white mb-10">
        Experience the Best: Dive into Our Top-Rated Movie Selection!
      </p>

      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
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

          disableOnInteraction: false
         }}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {serviceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[220px] w-[175px] lg:h-[250px] lg:w-[300px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover "
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
              <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                <h1 className="text-xl lg:text-2xl">{item.title}</h1>
                <p className="lg:text-[18px]">{item.content}</p>
              </div>
              <CgPlayButtonO  className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;
