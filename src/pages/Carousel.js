import React, { useState } from "react";
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs';
import Card from "./Card";

export default function Carousel({ movies }) {
    const [current, setCurrent] = useState(0);

    const previousSlide = () => {
      if (current === 0) setCurrent(movies.length - 1);
      else setCurrent(current - 1);
    };
  
    const nextSlide = () => {
      if (current === movies.length - 1) setCurrent(0);
      else setCurrent(current + 1);
    };
  
    return (
      <div className="relative">
        <div
          className="flex transition-transform duration-400 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {/* {movies.map((image, index) => (
            <img
              src={image}
              alt={`Movie ${index}`}
              key={index}
              className="w-full"
            />
          ))} */}
          {movies.map((card) => (
            <Card
              id={card.id}
              image={card.image}
              title={card.title}
              genre={card.genre}
              rating={card.rating}
              year={card.year}
              status={card.status}
            />
          ))}
        </div>
        <div className="absolute top-0 left-0 flex w-full justify-between items-center">
          <button onClick={previousSlide}>
            <BsArrowLeftCircle className="text-white text-4xl" />
          </button>
          <button onClick={nextSlide}>
            <BsArrowRightCircle className="text-white text-4xl" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 flex w-full justify-center gap-3 p-5">
          {movies.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-5 h-5 rounded-full cursor-pointer ${
                index === current ? 'bg-white' : 'bg-gray-300'
              }`}
            ></span>
          ))}
        </div>
      </div>
    );
  }