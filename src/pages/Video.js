import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { FreeMode, Pagination, Autoplay, Navigation} from "swiper/modules";
import { CgPlayButtonO } from "react-icons/cg";

const ActiveSlider = () => {
  // JSON object containing service data with image URLs
  const ServiceData = [
    {
      title: "Dune 2",
      content: "Description of service 1",
      backgroundImage: "https://image.tmdb.org/t/p/original/87jZEVp4FW6GwTx56mbbqIQQF75.jpg",
      // Assuming you have an icon component for service 1
      icon: () => <div>Icon Component 1</div>
    },
    {
      title: "Exhuma",
      content: "Description of service 2",
      backgroundImage: "https://m.media-amazon.com/images/M/MV5BMzczMmQ0NTItM2JkZi00MTRhLTg5OGMtZWEyZTE2ZDgwM2FjXkEyXkFqcGdeQXVyMTU1MDczNjU1._V1_.jpg",
      // Assuming you have an icon component for service 2
      icon: () => <div>Icon Component 2</div>
    },
    {
      title: "Damsel",
      content: "Description of service 1",
      backgroundImage: "https://m.media-amazon.com/images/M/MV5BZWM0ZDVlMDgtNDdhMy00NWVlLWE1MmItNmViODMzNmUyMDU2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      // Assuming you have an icon component for service 1
      icon: () => <div>Icon Component 1</div>
    },
    {
      title: "Oppenheimer",
      content: "Description of service 2",
      backgroundImage: "https://m.media-amazon.com/images/I/81218n6JFgL._AC_UF1000,1000_QL80_.jpg",
      // Assuming you have an icon component for service 2
      icon: () => <div>Icon Component 2</div>
    },
    {
      title: "Barbie",
      content: "Description of service 2",
      backgroundImage: "https://image.tmdb.org/t/p/original/u5kboZR4OMi4QdbOhawCZuzMVWJ.jpg",
      // Assuming you have an icon component for service 2
      icon: () => <div>Icon Component 2</div>
    },
    
    // Add more service objects as needed
  ];

  return (
    <div className="flex items-center justify-center flex-col h-[600px] bg-[#152238]">
      <h1 className="text-5xl font-medium mb-4 mt-5">
        <span className="text-blue-500">Flix</span>
        <span className="text-white ">Tv Originals</span>
      </h1>
      <p className="text-white mb-10">
        Celebrity interviews, trending entertainment stories, and expert analysis.
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
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
         }}
        // autoplay={{ delay: 3000 }}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[220px] w-[175px] lg:h-[250px] lg:w-[300px] overflow-hidden cursor-pointer">
              <div
                className="absolute inset-0 bg-cover bg-center"
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
