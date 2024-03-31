import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure to install axios with npm or yarn
import { LuEye } from "react-icons/lu";
import { FaRegPlusSquare } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { RiMovie2Fill } from "react-icons/ri";

const Dashboard = () => {
  const [latestMovies, setLatestMovies] = useState([]);
  const [latestUsers, setLatestUsers] = useState([]);
  const [subscriptionStats, setSubscriptionStats] = useState({ gold: 0, silver: 0, free: 0 });
  const token = localStorage.getItem('token');

  useEffect(() => {
    // Fetch latest movies
    axios.get('http://localhost:8080/api/v1/movies?page=1&pageSize=5')
      .then(response => {
        setLatestMovies(response.data.movies);
      })
      .catch(error => console.error("There was an error fetching the movies data: ", error));

    // Fetch latest users
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    axios.get('http://localhost:8080/api/v1/admin/users', config)
    
      .then(response => {
        setLatestUsers(response.data.slice(0, 5)); // Assuming the API returns an array and we take only the first 5
      })
      .catch(error => console.error("There was an error fetching the users data: ", error));

    // Fetch subscription stats
    const subscriptions = ['GOLD', 'SILVER', 'FREE'];
    subscriptions.forEach(subscription => {
      axios.get(`http://localhost:8080/api/v1/admin/users?subscription=${subscription}`, config)
        .then(response => {
          setSubscriptionStats(prevStats => ({
            ...prevStats,
            [subscription.toLowerCase()]: response.data.length
          }));
        })
        .catch(error => console.error(`There was an error fetching ${subscription} subscription data: `, error));
    });
  }, []);


  return (
    <div className="flex-grow p-10 space-y-6 bg-gray-900 min-h-screen">
      <div className="text-white text-3xl ">
        <h1 style={{ padding: '10px', borderBottom: '1px solid rgba(100,100,100,0.2)' }}>Dashboard</h1>
      </div>
      
      {/* Stats Boxes */}
      <div className="grid grid-cols-3 gap-3">
        {/* Gold Users Box */}
        <div className="bg-[#0e182b] bg-gray-800 p-5 rounded-lg shadow-md overflow-auto">
          <div className="flex items-center mb-4">
            <LuEye className="text-yellow-300 mr-2" size={28} />
            <h2 className="text-white text-xl">Gold Users</h2>
          </div>
          <h1 className="text-white text-3xl">{subscriptionStats.gold}</h1>
        </div>

        {/* Silver Users Box */}
        <div className="bg-[#0e182b] bg-gray-800 p-5 rounded-lg shadow-md overflow-auto">
          <div className="flex items-center mb-4">
            <LuEye className="text-gray-300 mr-2" size={28} />
            <h2 className="text-white text-xl">Silver Users</h2>
          </div>
          <h1 className="text-white text-3xl">{subscriptionStats.silver}</h1>
        </div>

        {/* Free Users Box */}
        <div className="bg-[#0e182b] bg-gray-800 p-5 rounded-lg shadow-md overflow-auto">
          <div className="flex items-center mb-4">
            <LuEye className="text-blue-300 mr-2" size={28} />
            <h2 className="text-white text-xl">Free Users</h2>
          </div>
          <h1 className="text-white text-3xl">{subscriptionStats.free}</h1>
        </div>
        

        {/* Placeholder for two more boxes if needed */}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#0e182b] bg-gray-800 p-5 rounded-lg shadow-md overflow-auto">
          <div className="flex items-center mb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '10px' }}>
            <RiMovie2Fill className="text-blue-300 mr-2" size={28} />
            <h2 className="text-white text-2xl">Latest Movies</h2>
          </div>
          <table className="w-full text-white">
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <th>Title</th>
                <th>Year</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {latestMovies.map(movie => (
                <tr key={movie.id}>
                  <td style={{ padding: '10px' }}>{movie.title}</td>
                  <td style={{ padding: '10px' }}>{movie.releaseYear}</td>
                  <td style={{ padding: '10px' }}>{movie.imdbRating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-[#0e182b] bg-gray-800 p-5 rounded-lg shadow-md overflow-auto">
          <div className="flex items-center mb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '10px' }}>
            <IoIosPeople className="text-blue-300 mr-2" size={28} />
            <h2 className="text-white text-2xl">Latest Users</h2>
          </div>
          <table className="w-full text-white">
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <th>Name</th>
                <th>Email</th>
                <th>Subscription</th>
              </tr>
            </thead>
            <tbody >
    {latestUsers.map(user => (
      <tr key={user.id} >
        <td style={{ padding: '10px' }}>{user.name}</td> 
        <td style={{ padding: '10px' }}>{user.email}</td> 
        <td style={{ padding: '10px' }}>{user.subscription}</td> 
      </tr>

    ))}
  </tbody>
          </table>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;