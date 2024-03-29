import React from "react";
import { GoCheck, GoX } from "react-icons/go";

const Cards = () => {
  return (
    <div className="bg-[#131720] my-4" id="plans-page">
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
              <GoCheck className="mr-2 mt-1" color="green" /> FlixTV Originals
            </p>
            <p className="flex flex-row my-2">
              <GoCheck className="mr-2 mt-1" color="green" /> Switch Plans or
              cancel anytime
            </p>
            <p className="flex flex-row my-2">
              <GoX className="mr-2 mt-1" color="red" /> Stream 65+ top live
            </p>
            <p className="flex flex-row my-2">
              <GoX className="mr-2 mt-1" color="red" /> TV channels
            </p>
            <hr class="h-px my-5 bg-slate-700 border-0"></hr>
            <div className="flex flex-row">
              <h2 className="text-4xl font-bold">$11.99</h2>
              <p className="mt-4">/month</p>
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
              <GoCheck className="mr-2 mt-1" color="green" /> FlixTV Originals
            </p>
            <p className="flex flex-row my-2">
              <GoCheck className="mr-2 mt-1" color="green" />
              Switch Plans or cancel anytime
            </p>
            <p className="flex flex-row my-2">
              <GoCheck className="mr-2 mt-1" color="green" />
              Stream 65+ top live
            </p>
            <p className="flex flex-row my-2">
              <GoX className="mr-2 mt-1" color="red" />
              TV channels
            </p>
            <hr class="h-px my-5 bg-slate-700 border-0"></hr>
            <div className="flex flex-row">
              <h2 className="text-4xl font-bold">$34.99</h2>
              <p className="mt-4">/month</p>
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
              FlixTV Originals
            </p>
            <p className="flex flex-row my-2">
              <GoCheck className="mr-2 mt-1" color="green" />
              Switch Plans or cancel anytime
            </p>
            <p className="flex flex-row my-2">
              <GoCheck className="mr-2 mt-1" color="green" />
              Stream 65+ top live
            </p>
            <p className="flex flex-row my-2">
              <GoCheck className="mr-2 mt-1" color="green" />
              TV channels
            </p>
            <hr class="h-px my-5 bg-slate-700 border-0"></hr>
            <div className="flex flex-row">
              <h2 className="text-4xl font-bold">$44.99</h2>
              <p className="mt-4">/month</p>
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
