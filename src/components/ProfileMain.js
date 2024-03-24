import React from "react";

function ProfileMain(){
    return(
        <>
            <nav className="flex justify-between items-center  text-white p-4 ">
        <ul className="flex-col items-center">
          <li className="text-lg font-bold mr-2">{UserData.username}</li>
          <li className="text-sm">Flix TV ID: {UserData.id}</li>
        </ul>
        <div className="flex items-center space-x-4 border-b-2 border-gray-400 ">
          <a href="#" className="hover:text-blue-500 px-3 py-2 rounded ">
            Profile
          </a>
          <a href="#" className="hover:text-blue-500 px-3 py-2 rounded">
            Favorites
          </a>
          <a href="#" className="hover:text-blue-500 px-3 py-2 rounded">
            Settings
          </a>
          <a href="#" className="hover:text-blue-500 px-3 py-2 rounded">
            Sign out
          </a>
        </div>
      </nav>
        </>
    )
}