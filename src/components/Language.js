import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import myDownloadedImage from "./pic.jpg";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { BsPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ActiveSlider = () => {
  // Use the imported image for all cards
  const backgroundImageUrl = myDownloadedImage;

  // Get the aspect ratio of the image
  const imageAspectRatio = 1080 / 1920; // Height / Width

  // Calculate the height of the box based on the aspect ratio and width
  const boxHeight = 360 * imageAspectRatio; // Increase the box height here

  // Language names
  const languages = [
    "hindi",
    "english",
    "telugu",
    "tamil",
    "malayalam",
    "spanish",
    "italian",
    "bengali",
    "marathi",
    "gujarati"
  ];

  // JSON object containing service data
  const ServiceData = languages.map(language => ({
    backgroundImageUrl: backgroundImageUrl,
    language: language
  }));

  // Function to slide to the next card
  const goNext = () => {
    if (swiper.current && swiper.current.swiper) {
      swiper.current.swiper.slideNext();
    }
  };

  // Function to slide to the previous card
  const goPrev = () => {
    if (swiper.current && swiper.current.swiper) {
      swiper.current.swiper.slidePrev();
    }
  };

  const swiper = React.useRef(null);

  return (
    <div className="relative  bg-[#152238] text-white mt-4">
      <h1 className="text-white text-3xl py-8 px-8 flex my-4 justify-right ml-20">
        Watch in your own &nbsp; <span className="font-bold text-yellow-500"> Language</span>
      </h1>

      <div className="relative max-w-[90%] lg:max-w-[80%] overflow-hidden mx-auto ">
        <Swiper
          ref={swiper}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 0 }, // Adjusted spaceBetween for smaller screens
            640: { slidesPerView: 3, spaceBetween: 0 }, // Adjusted spaceBetween for medium screens
            768: { slidesPerView: 5, spaceBetween: 0 }, // Adjusted spaceBetween for large screens
            1024: { slidesPerView: 5, spaceBetween: 0 }, // Adjusted spaceBetween for extra large screens
          }}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination, Navigation]}
          loop={true}
        >
          {ServiceData.map((item, index) => (
            <SwiperSlide key={index}>
              <Link to={`/lang/${item.language}`}>
                <div
                  className="flex flex-col items-center justify-center mb-20 group relative lg:h-[300px] lg:w-[180px] overflow-hidden cursor-pointer transform transition duration-300 ease-in-out"
                  style={{
                    backgroundImage: `url(${item.backgroundImageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "200px",
                    height: `${boxHeight}px`,
                    borderRadius: "0",
                    transition:
                      "filter 0.3s ease-in-out, transform 0.3s ease-in-out"
                  }}
                >
                  <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <BsPlayFill className="text-white text-4xl" />
                  </div>
                  <div className="absolute inset-0 group-hover:filter-blur-lg group-hover:transform-scale-110" />
                  <div className="text-orange font-bold absolute left-0 top-1/2 transform -translate-y-1/2 pl-4">
                    Watch in <br />
                    <span style={{ color: "orange", textTransform: "capitalize" }}>
                      {item.language}
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-5 text-white z-10"
        onClick={goPrev}
      >
        <MdKeyboardArrowLeft size={44} />
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-5 text-white z-10"
        onClick={goNext}
      >
        <MdKeyboardArrowRight size={44} />
      </button>
    </div>
  );
};

export default ActiveSlider;