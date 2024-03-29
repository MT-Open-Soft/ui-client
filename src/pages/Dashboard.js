import React from 'react';
import { LuEye } from "react-icons/lu";
import { FaRegPlusSquare } from 'react-icons/fa'; // For items added
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoIosPeople } from 'react-icons/io'; // For latest users

const Dashboard = () => {
  const latestItems = [
    { id: 26, title: "I Dream in Another Language", category: "Movie", status: "Visible" },
    { id: 25, title: "Benched", category: "Movie", status: "Visible" },
    { id: 24, title: "Whitney", category: "TV Show", status: "Visible" },
    { id: 23, title: "Blindspotting 2", category: "TV Show", status: "Visible" },
    { id: 22, title: "Blindspotting", category: "TV Show", status: "Visible" }
  ];

  // Dummy data for latest users
  const latestUsers = [
    { id: 23, fullName: "Brian Cranston", email: "bcxwz@email.com", username: "BrianXWZ" },
    { id: 22, fullName: "Jesse Plemons", email: "jess@email.com", username: "Jesse.P" },
    { id: 21, fullName: "Matt Jones", email: "matt@email.com", username: "Matty" },
    { id: 20, fullName: "Tess Harper", email: "harper@email.com", username: "Harper123" },
    { id: 19, fullName: "Jonathan Banks", email: "bank@email.com", username: "Jonathan" }
  ];

  return (
    <div className="p-10 space-y-6 bg-gray-900 min-h-screen">
      <div className="text-white text-3xl ">
        <h1 style={{ padding: '10px', borderBottom: '1px solid rgba(100,100,100,0.2)' }}>Dashboard</h1>
      </div>
      {/* Stats Boxes */}
      <div className="grid grid-cols-2 gap-4">
        {/* Unique Views Box */}
        <div className="bg-[#0e182b] bg-gray-800  p-5 rounded-lg shadow-md overflow-auto ">
        <div className="flex items-center mb-4">
        <LuEye className="text-blue-300 mr-2" size={28} />
        <h2 className="text-white text-2xl " style={{ padding: '10px' }}>Unique Views This Month</h2>
          </div>
          
          {/* Dynamic data should be inserted here */}
          <h1 className="text-white text-3xl" >1246</h1>

        </div>


        {/* Items Added Box */}
        <div className="bg-[#0e182b] bg-gray-800  p-5 rounded-lg shadow-md overflow-auto ">
        <div className="flex items-center mb-4">
          <FaRegPlusSquare className="text-blue-300 mr-2" size={28} />
          <h2 className="text-white text-2xl " style={{ padding: '10px' }}>Items Added This Month</h2>
          </div>
          {/* Dynamic data should be inserted here */}
          <h1 className="text-white text-3xl" >3578</h1>
          
        </div>
        

        {/* Placeholder for two more boxes if needed */}
      </div>

      {/* Latest Items and Users */}
      <div className="grid grid-cols-2 gap-4">
        {/* Latest Items Box */}
        <div className="bg-[#0e182b] bg-gray-800 p-5 rounded-lg shadow-md overflow-auto">
        <div className="flex items-center mb-4"  style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '10px' }} >
            <HiOutlineSquares2X2 className="text-blue-300 mr-2" size={28} />
            <h2 className="text-white text-2xl " style={{ padding: '10px' }}>Latest Items</h2>
          </div>
          <table className="w-full text-white" >
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <th>ID</th>
                <th>Title</th>
                <th>Category</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {latestItems.map(item => (
                <tr key={item.id}>
                  <td style={{ padding: '10px' }}>{item.id}</td>
                  <td style={{ padding: '10px' }}>{item.title}</td>
                  <td style={{ padding: '10px' }}>{item.category}</td>
                  <td style={{ padding: '10px' }}>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Latest Users Table */}
        <div className="bg-[#0e182b] bg-gray-800 p-5 rounded-lg shadow-md overflow-auto">
          <div className="flex items-center mb-4"  style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '10px' }} >
            <IoIosPeople className="text-blue-300 mr-2" size={28} />
            <h2 className="text-white text-2xl " style={{ padding: '10px' }}>Latest Users</h2>
          </div>
          <table className="w-full text-white " >
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '10px' }}>
                <th>ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody >
              {latestUsers.map(user => (
                <tr key={user.id} style={{ padding: '10px' }}>
                  <td style={{ padding: '10px' }}>{user.id}</td>
                  <td style={{ padding: '10px' }}>{user.fullName}</td>
                  <td style={{ padding: '10px' }}>{user.email}</td>
                  <td style={{ padding: '10px' }}>{user.username}</td>
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