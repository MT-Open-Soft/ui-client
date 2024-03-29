import React,{useState}  from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import LanguageMovies from "./LanguageMovies";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { Link } from 'react-router-dom';

const ActiveSlider = () => {
  // URL of the background image for all cards
  const backgroundImageUrl = "https://us.123rf.com/450wm/seamartini/seamartini2301/seamartini230100013/196682319-grunge-movie-film-strip-isolated-filmstrip-frame-on-vector-transparent-background-old-photo-or.jpg?ver=6"
  

  // JSON object containing service data
  const ServiceData = [
    {
      title: "Hindi",
      // content: "Watch In Hindi",
      icon: () => <div style={{ color: '#0B4EAD', fontWeight: 'bold' }}>Watch In</div>
    },
    {
      title: "English",
      // content: "Watch In English",
      icon: () => <div style={{ color: '#0B4EAD', fontWeight: 'bold' }}>Watch In</div>
    },
    {
      title: "Tamil",
      // content: "Watch In Tamil",
      icon: () => <div style={{ color: '#0B4EAD', fontWeight: 'bold' }}>Watch In</div>
    },
    {
      title: "Telugu",
      // content: "Watch In Telugu",
      icon: () => <div style={{ color: '#0B4EAD', fontWeight: 'bold' }}>Watch In</div>
    },
    {
      title: "Spanish",
      // content: "Watch In Spanish",
      icon: () => <div style={{ color: '#0B4EAD', fontWeight: 'bold' }}>Watch In</div>
    },
    // Add more service objects as needed
  ];


  return (
    <div className="flex items-center justify-center flex-col h-screen bg-[#152238] text-white" id="language-section">

      <p className="text-white mb-10">
        Language.
      </p>

      <Swiper
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 10 },
          1024: { slidesPerView: 4, spaceBetween: 10 },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination, Navigation]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <Link to={`/language/${item.title}`} >
            <div className="flex flex-col items-center justify-center gap-6 mb-20 group relative rounded-xl p-4 h-[180px] w-[140px] lg:h-[200px] lg:w-[240px] overflow-hidden cursor-pointer" style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2), 0 3px 5px rgba(0, 0, 0, 0.1), -5px 0 15px rgba(0, 0, 0, 0.1)' }}>
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col items-center gap-3">
                <item.icon />
                <h1 className="text-lg lg:text-xl" style={{ color: '#0B4EAD', fontWeight: 'bold' }}>{item.title}</h1>
                <p className="lg:text-[14px]">{item.content}</p>
              </div>
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;
