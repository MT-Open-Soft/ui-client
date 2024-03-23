import React, { useState } from "react";
import Favorites from "./Favorites";
import Settings from "./Settings";
function Profile() {
    const UserData = 
        {
          username:"abc",
          id:"873",
          balance: "$90.99",
          premium_plan: "$34.99/month",
          comments: "2573",
          reviews: "1021",
          title:"sahas",
          category:"comedy",
          rating:"5",
          movies:[{
            title: "Dune 2",
            category: "Series",
            rating: "3",
            
          },
          {
            title: "Exhuma",
            category: "Movie",
            rating: "3",
        
          },
          {
            title: "Damsel",
            category: "Series",
            rating: "3",
           
          },
          {
            title: "Oppenheimer",
            category: "Movie",
            rating: "9",
            
          },
          {
            title: "Barbie",
            category: "Series",
            rating: "5",
            
          }],
          latestreviews:[{
            item: "Dune 2",
            author: "Series",
            rating: "3",
            
          },
          {
            item: "Exhuma",
            author: "Movie",
            rating: "3",
        
          },
          {
            item: "Damsel",
            author: "Series",
            rating: "3",
           
          },
          {
            item: "Oppenheimer",
            author: "Movie",
            rating: "9",
            
          },
          {
            item: "Barbie",
            author: "Series",
            rating: "5",
            
          }]
        }
    return (
    <div className="bg-[#0e182b] pr-16 pl-16">
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
      <div className="grid gap-4 grid-cols-4 grid-rows-1 text-white justify-center text-center pt-6 pb-6 ">
        <span className="flex-1">
        <ul className="flex-col items-center">
          <li className="text-lg font-bold mr-2">My balance</li>
          <li className="text-sm">{UserData.balance}</li>
        </ul>
        </span>
        <span className="flex-1">
        <ul className="flex-col items-center">
          <li className="text-lg font-bold mr-2">Premium plan</li>
          <li className="text-sm">{UserData.premium_plan}</li>
        </ul>
        </span>
        <span className="flex-1">
        <ul className="flex-col items-center">
          <li className="text-lg font-bold mr-2">Your comments</li>
          <li className="text-sm">{UserData.comments}</li>
        </ul>
        </span>
        <span className="flex-1">
        <ul className="flex-col items-center">
          <li className="text-lg font-bold mr-2">Your reviews</li>
          <li className="text-sm">{UserData.reviews}</li>
        </ul>
        </span>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 grid-rows-1 text-white justify-center text-center pt-6 pb-6">
        <span className="flex-1">
        <div className="bg-[#182845] rounded-lg text-white shadow-lg p-6 max-w-xl">
            <h2 className="text-lg font-semibold mb-4">Movies for You</h2>
            <table className="table-auto w-full text-left">
                <thead>
                    <tr className="text-left">
                        <th className="px-4 py-2 text-left">Title</th>
                        <th className="px-4 py-2 text-left">Category</th>
                        <th className="px-4 py-2 text-left">Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {UserData.movies.map((movie, index) => (
                        <tr key={index}>
                            <td className=" px-4 py-2 text-left">{movie.title}</td>
                            <td className=" px-4 py-2 text-left">{movie.category}</td>
                            <td className=" px-4 py-2 text-left">{movie.rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </span>
        <span className="flex-1">
        <div className="bg-[#182845] rounded-lg text-white shadow-lg p-6 max-w-xl">
            <h2 className="text-lg font-semibold mb-4">Latest reviews</h2>
            <table className="table-auto w-full">
                <thead>
                    <tr className="text-left">
                        <th className="px-4 py-2">Item</th>
                        <th className="px-4 py-2">Author</th>
                        <th className="px-4 py-2">Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {UserData.latestreviews.map((review, index) => (
                        <tr key={index}>
                            <td className="text-left px-4 py-2">{review.item}</td>
                            <td className="text-left px-4 py-2">{review.author}</td>
                            <td className="text-left px-4 py-2">{review.rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
        </span>
      </div>
      <Favorites/>
      <Settings/>
    </div>
  );
}

export default Profile;
