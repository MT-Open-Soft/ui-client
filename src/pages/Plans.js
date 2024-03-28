import React from "react";
import { GoCheck, GoX } from "react-icons/go";

const Cards = () => {
  return (
    <div className="bg-[#131720] my-4">
      <h2 className="text-white text-4xl ml-20 font-semibold">
        {" "}
        Select Your Plan
      </h2>
      <p className="text-white my-2 text-lg ml-20 ">
        {" "}
        No hidden fees, equipment rentals, or installation appointments.
      </p>
      <div className="flex justify-evenly space-x-4 mx-10px bg-[#131720] my-5">
        <div className="bg-slate-800 text-white p-4 rounded-lg w-[400px] h-[400px] transition-colors duration-300 ease-in-out hover:bg-blue-500 justify-evenly my-4">
          <div className="ml-[10px]">
            <h2 className="text-2xl my-2 font-semibold">Regular</h2>
            <hr class="h-px my-5 bg-slate-700 border-0"></hr>
            <p className="flex flex-row my-2 ">
              <GoCheck className="mr-2 mt-1" color="green" /> Ai Power Search
            </p>
            <p className="flex flex-row my-2">
              <GoCheck className="mr-2 mt-1" color="green" /> Adaptive Streaming upto 480p
            </p>
            <p className="flex flex-row my-2">
              <GoX className="mr-2 mt-1" color="red" /> Premium Movies
            </p>

            <hr className="h-px my-5 bg-slate-700 border-0" />
<div className="flex flex-row items-center justify-center"> {/* Center align price and month */}
  <h2 className="text-4xl font-bold">&#8377;0</h2>
  <p className="text-white mt-4 ml-2">/month</p> {/* Add ml-2 to create space */}
</div>

            <button className="w-3/4 h-[50px] bg-black text-white p-1 rounded-lg transition-colors duration-300 ease-in-out hover:bg-white hover:text-slate-800 ml-[50px] my-[25px]">
              SELECT PLAN
            </button>
          </div>
        </div>

        <div className="bg-slate-800 text-white p-4 rounded-lg w-[400px] transition-colors duration-300 ease-in-out hover:bg-blue-500 my-4">
          <div className="ml-[10px]">
            <h2 className="text-2xl my-2 font-semibold">Premium</h2>
            <hr class="h-px my-5 bg-slate-700 border-0"></hr>
            <p className="flex flex-row my-2">
              <GoCheck className="mr-2 mt-1" color="green" /> Ai Power Search
            </p>
            <p className="flex flex-row my-2">
              <GoCheck className="mr-2 mt-1" color="green" />
              Adaptive Streaming upto 720p
            </p>
            <p className="flex flex-row my-2">
              <GoCheck className="mr-2 mt-1" color="green" />
              Premium Movies
            </p>
            
            <hr className="h-px my-5 bg-slate-700 border-0" />
<div className="flex flex-row items-center justify-center"> {/* Center align price and month */}
  <h2 className="text-4xl font-bold">&#8377;199.99</h2>
  <p className="text-white mt-4 ml-2">/month</p> {/* Add ml-2 to create space */}
</div>
            <button className="w-3/4 h-[50px] bg-black text-white p-1 rounded-lg transition-colors duration-300 ease-in-out hover:bg-white hover:text-slate-800 ml-[50px] my-[25px]">
              SELECT PLAN
            </button>
          </div>
        </div>

        <div className="bg-slate-800 text-white p-4 rounded-lg w-[400px] transition-colors duration-300 ease-in-out hover:bg-blue-500 my-4">
          <div className="ml-[10px]">
            <h2 className="text-2xl my-2 font-semibold">
              Premium +TV Channels
            </h2>
            <hr class="h-px my-5 bg-slate-700 border-0"></hr>
            <p className="flex flex-row my-2">
              <GoCheck className="mr-2 mt-1" color="green" />
              Ai Power Search
            </p>
            <p className="flex flex-row my-2">
              <GoCheck className="mr-2 mt-1" color="green" />
              Adaptive Streaming upto 1080p
            </p>
            <p className="flex flex-row my-2">
              <GoCheck className="mr-2 mt-1" color="green" />
              Premium Movies
            </p>
            {/* <p className="flex flex-row my-2">
              <GoCheck className="mr-2 mt-1" color="green" />
              TV channels
            </p> */}
            <hr className="h-px my-5 bg-slate-700 border-0" />
<div className="flex flex-row items-center justify-center"> {/* Center align price and month */}
  <h2 className="text-4xl font-bold">&#8377;399.99</h2>
  <p className="text-white mt-4 ml-2">/month</p> {/* Add ml-2 to create space */}
</div>
            <button className="w-3/4 h-[50px] bg-black text-white p-1 rounded-lg transition-colors duration-300 ease-in-out hover:bg-white hover:text-slate-800 ml-[50px] my-[25px]">
              SELECT PLAN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
