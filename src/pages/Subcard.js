import React, { useState } from "react";
import { BsEye } from "react-icons/bs";

const Subcard = ({ image, title, rating, year, genre, status }) => {
  return (
    <>
      <div className="w-210px h-388px rounded-2xl overflow-hidden shadow-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-3/4 rounded-2xl transition-transform duration-500 hover:scale-110 hover:blur-sm "
        />

        <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0" >
          <div className="p-2">
            <BsEye className="text-white" />
          </div>
        </div>

        <div className="px-6 ">
          <div className="text-white font-bold text-lg mb-2">{title}</div>
          <div className="flex flex-row justify-start gap-x-3 ">
           <p className="text-slate-200 text-xs">{status}</p>
           <p className="text-slate-200 text-xs">{genre}</p>
           <p className="text-slate-200 text-xs">{year}</p>
          </div>          
        </div>
      </div>
    </>
  );
};

export default Subcard;