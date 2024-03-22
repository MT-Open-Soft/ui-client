import React, { useState } from "react";
import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";
import Subcard from "./Subcard";

function Subs() {
  const subscriptions = [
    {
      id: 1,
      image: "https://flixtv.volkovdesign.com/main/img/card/11.png",
      title: "Space Movies",
      desription: "More than 500 movies",
    },
    {
      id: 2,
      image: "https://flixtv.volkovdesign.com/main/img/card/15.png",
      title: "Psychological films",
      desription: "More than 500 movies",
    },
    {
      id: 3,
      image: "https://flixtv.volkovdesign.com/main/img/card/3.png",
      title: "Films about space",
      desription: "More than 500 movies",
    },
    {
      id: 4,
      image: "https://flixtv.volkovdesign.com/main/img/card/1.png",
      title: "Romantic Movies",
      desription: "More than 500 movies",
    },
    {
      id: 5,
      image: "https://flixtv.volkovdesign.com/main/img/card/2.png",
      title: "Fairy tales",
      desription: "More than 500 movies",
    },
    {
      id: 6,
      image: "https://flixtv.volkovdesign.com/main/img/card/17.png",
      title: "Best movies",
      desription: "More than 500 movies",
    },
    {
      id: 7,
      image: "https://flixtv.volkovdesign.com/main/img/card/10.png",
      title: "Horror movies",
      desription: "More than 500 movies",
    },
    {
      id: 8,
      image: "https://flixtv.volkovdesign.com/main/img/card/14.png",
      title: "Army Movies",
      desription: "More than 500 movies",
    },
    {
      id: 9,
      image: "https://flixtv.volkovdesign.com/main/img/card/9.png",
      title: "Reality Shows",
      desription: "More than 500 movies",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    const newIndex = (startIndex + 6) % subscriptions.length;
    setStartIndex(newIndex);
  };

  const handlePrev = () => {
    const newIndex = (startIndex - 6 + subscriptions.length) % subscriptions.length;
    setStartIndex(newIndex);
  };

  const visiblSubs = [
    subscriptions[startIndex % subscriptions.length],
    subscriptions[(startIndex + 1) % subscriptions.length],
    subscriptions[(startIndex + 2) % subscriptions.length],
    subscriptions[(startIndex + 3) % subscriptions.length],
    subscriptions[(startIndex + 4) % subscriptions.length],
    subscriptions[(startIndex + 5) % subscriptions.length],
  ];

  return (
    
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
          {visiblSubs.map((card) => (
            <Subcard
              key={Subcard.id}
              image={Subcard.image}
              title={Subcard.title}
              decription={Subcard.decription}
            />
          ))}
          <button
            onClick={handleNext}
            disabled={startIndex >= subscriptions.length - 6}
            className="text-white"
          >
            <SlArrowRightCircle />
          </button>
        </div>
      </div>
      
      
        
  );
}

export default Subs;