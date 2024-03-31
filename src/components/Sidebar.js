import React from 'react';
import { FaHome, FaUserFriends, FaRegPlusSquare } from 'react-icons/fa';
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { MdModeEdit } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Sidebar = () => {
  // Placeholder admin name
  const adminName = localStorage.getItem('name');

  return (
    <div className="w-64 bg-gray-900 text-white" style={{ padding: '10px', borderRight: '1px solid rgba(100,100,100,0.2)',overflowY: 'auto' }}>
      {/* Admin Header */}
      <div className="px-4 py-3" style={{ borderBottom: '1px solid rgba(200,200,200,0.1)', padding: '10px' }}>
        <div className="flex items-center mb-4">
          <FaUserLarge className="text-white mr-3" size={30} />

          <div className="text-xl">{adminName}</div>
        </div>
      </div>
      <br></br>
      <ul className="space-y-5">
      <li className="flex items-center space-x-2">
          <FaHome className="text-blue-300 mr-2" size={20} />
          <Link to="/admin" className="sidebar-link">Dashboard</Link> 
        </li>
        <li className="flex items-center space-x-2">
          <HiOutlineSquares2X2 className="text-blue-300 mr-2" size={20} />
          <Link to="/catalog">Catalog</Link>
        </li>
        <li className="flex items-center space-x-2">
          <FaUserFriends className="text-blue-300 mr-2" size={20} />
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;