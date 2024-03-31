import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
//import { BsEye } from "react-icons/bs";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Card = ({ id, image, title, rating, year, status, directors, cast, search = 'no' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  
  const handleClick = () => {
    navigate(`/movie/${id}`); 
  };

  const renderModalContent = () => (
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-4">
      {directors && (
        <p className="text-slate-300 text-sm">{directors}</p>
      )}
      {cast && (
        <p className="text-slate-300 text-sm">{cast}</p>
      )}
    </div>
  );

  return (
    <>
      <div 
        className="w-[210px] h-[388px] rounded-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <div className="w-210px h-388px rounded-2xl overflow-hidden relative group">
          <img
            src={image || "https://image.tmdb.org/t/p/w1280/hLFoDZVgZFwxUz7SVJqYSo38QX8.jpg"}
            alt={title}
            className="w-full h-3/4 rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm pb-2"
          />

          <div className="transition-all transform duration-500 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 absolute inset-0 flex items-center justify-center">
            <div className="p-2">
              <IoPlayCircleOutline className="text-white text-6xl" />
            </div>
            {isHovered && search === "yes" && (directors || cast) && renderModalContent()}
          </div>
          
          {/* <div className="transition-all transform duration-500 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 absolute inset-0 flex items-center justify-start" >
          <div className="p-2">
            <IoBookmarkOutline className="text-white text-3xl" />
          </div>
        </div> */}
        </div>

        <div className="px-2 ">
          <div className="text-white text-bold text-lg mb-2">
            {" "}
            {title.split(" ").length > 3
              ? title.split(" ").slice(0, 3).join(" ") + "  .."
              : title}
          </div>
          {search === "no" && (
          <>
            <div className="flex flex-row justify-start gap-x-3 ">
              <p
                className={`text-xs rounded-lg px-2 py-1 ${
                  status ? "bg-yellow-500" : "bg-blue-500"
                }`}
              >
                {status ? "Premium" : "Free"}
              </p>{" "}
              <p className="text-slate-200 text-xs flex items-center">{year}</p>
              <p className="text-slate-200 text-xs flex items-center">
                {rating}
                <FaStar className="ml-1" />
              </p>{" "}
            </div>
          </>
        )}
        </div>
      </div>
    </>
  );
};

export default Card;