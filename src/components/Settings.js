import React, {useState} from "react";
import axios from "axios";
function Settings(){
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
    return(
        <>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 grid-rows-1 text-white justify-center text-center pt-6 pb-6">
        <span className="flex-1">
        <div className="bg-[#0b2045] rounded-lg text-white shadow-lg p-6 max-w-xl">
            <h2 className="text-lg font-semibold mb-4">Profile Details</h2>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
      <div className=" p-4 text-left text-white ">
        <div className="font-semibold ">Login</div> 
        <input type="text" className="rounded-md bg-[#304261] placeholder-gray p-1 mt-2" placeholder="User123"  />
      </div>
      <div className=" p-4 text-left text-white ">
        <div className="font-semibold ">Email</div> 
        <input type="text" className="rounded-md bg-[#304261] placeholder-gray p-1 mt-2" placeholder="User123"  />
      </div>
      <div className=" p-4 text-left text-white ">
        <div className="font-semibold ">First name</div> 
        <input type="text" className="rounded-md bg-[#304261] placeholder-gray p-1 mt-2" placeholder="User123"  />
      </div>
      <div className=" p-4 text-left text-white ">
        <div className="font-semibold ">Last name</div> 
        <input type="text" className="rounded-md bg-[#304261] placeholder-gray p-1 mt-2" placeholder="User123"  />
      </div>
    </div>
    <button
        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        
      >
        Save
      </button>
        </div>
        
        </span>
        <span className="flex-1">
        <div className="bg-[#0b2045] rounded-lg text-white shadow-lg p-6 max-w-xl">
            <h2 className="text-lg font-semibold mb-4">Profile Details</h2>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
      <div className=" p-4 text-left text-white ">
        <div className="font-semibold ">Old Password</div> 
        <input type="text" className="rounded-md bg-[#304261] placeholder-gray p-1 mt-2" placeholder="User123"  />
      </div>
      <div className=" p-4 text-left text-white ">
        <div className="font-semibold ">New Password</div> 
        <input type="text" className="rounded-md bg-[#304261] placeholder-gray p-1 mt-2" placeholder="User123"  />
      </div>
      <div className=" p-4 text-left text-white ">
        <div className="font-semibold ">Confirm New Passsword</div> 
        <input type="text" className="rounded-md bg-[#304261] placeholder-gray p-1 mt-2" placeholder="User123"  />
      </div>
      <div className=" p-4 text-left text-white ">
        <div className="font-semibold ">Select</div> 
        <input type="text" className="rounded-md bg-[#304261] placeholder-gray p-1 mt-2" placeholder="User123"  />
      </div>
    </div>
    <button
        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        
      >
        Save
      </button>
        </div>
        
        </span>
      </div>
        </>
    )
}
export default Settings;