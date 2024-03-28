import React, { useState } from 'react';
import { CgTrashEmpty} from 'react-icons/cg';
import {  IoPencil } from 'react-icons/io5';
import { GoSearch } from 'react-icons/go';
import { IoIosLock } from 'react-icons/io';
import { CgProfile } from "react-icons/cg";

const Catalog = () => {
  const [sortBy, setSortBy] = useState('date'); // Default sorting option
  const [showOptions, setShowOptions] = useState(false); // State to track if options should be shown

  const handleSortBy = (option) => {
    let sortedData = [...catalogData];
    if (option === 'date') {
      sortedData.sort((a, b) => new Date(a.createdDate) - new Date(b.createdDate));
    } else if (option === 'pricingPlan') {
      const planOrder = { 'Premium': 0, 'Basic': 1, 'Free': 2 };
      sortedData.sort((a, b) => planOrder[a[option]] - planOrder[b[option]]);
    } else {
      sortedData.sort((a, b) => (a[option] > b[option]) ? 1 : -1);
    }
    setCatalogData(sortedData);
    setSortBy(option);
    setShowOptions(false); // Close the options after selecting one
  };
  
  
  

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const [catalogData, setCatalogData] = useState([
    {
      id: 23,
      basicInfo: 'John Doe',
      username: 'email@email.com',
      pricingPlan: 'Premium',
      comments: '0',
      reviews: 13,
      status: 'Approved',
      createdDate: '24 Oct 2021'
    },
    {
      id: 23,
      basicInfo: 'Bohn Doe',
      username: 'email@email.com',
      pricingPlan: 'Premium',
      comments: '23',
      reviews: 1,
      status: 'Approved',
      createdDate: '24 Oct 2021'
    },
    {
      id: 23,
      basicInfo: 'Chhn Doe',
      username: 'email@email.com',
      pricingPlan: 'Basic',
      comments: '9',
      reviews: 6,
      status: 'Approved',
      createdDate: '24 Oct 2021'
    },
    {
      id: 23,
      basicInfo: 'John Doe',
      username: 'email@email.com',
      pricingPlan: 'Premium',
      comments: '8',
      reviews: 11,
      status: 'Banned',
      createdDate: '14 Oct 2021'
    },
    {
      id: 23,
      basicInfo: 'John Doe',
      username: 'email@email.com',
      pricingPlan: 'Free',
      comments: '23',
      reviews: 0,
      status: 'Approved',
      createdDate: '24 Oct 2021'
    },
    {
      id: 23,
      basicInfo: 'John Doe',
      username: 'email@email.com',
      pricingPlan: 'Premium',
      comments: '18',
      reviews: 2,
      status: 'Approved',
      createdDate: '28 Oct 2021'
    },
  ]);


  const [searchQuery, setSearchQuery] = useState(''); // State to track the search query
  const [searchResults, setSearchResults] = useState([]); // State to store search results

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase().trim(); // Convert input to lowercase and remove leading/trailing spaces
    setSearchQuery(query);
  
    if (!query) {
      // If the search query is empty, reset search results to empty array
      setSearchResults([]);
      return;
    }
  
    // Filter catalogData based on the search query
    const results = catalogData.filter((item) => {
      // Convert relevant item properties to lowercase for case-insensitive comparison
      const basicInfo = item.basicInfo.toLowerCase();
      const username = item.username.toLowerCase();
  
      // Check if either basicInfo or username contains the search query
      return basicInfo.includes(query) || username.includes(query);
    });
  
    // Set the search results to the filtered items
    setSearchResults(results);
  };
  
  

  return (
    <div className="bg-[#212529] text-white relative">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-3xl font-bold" style={{ fontFamily: 'Rubik, sans-serif' }}>Users</h1>
        <div className="relative">
          <span className="text-sm text-white mr-2">Sort By:</span>
          <button className="text-sm text-white hover:text-gray-300" onClick={toggleOptions}>
            {sortBy === 'date' ? 'Date' : (sortBy === 'pricing plan' ? 'Pricing plan' : 'Status')}
          </button>
          {showOptions && (
            <div className="absolute mt-2 right-0">
              <button className="block px-4 py-2 text-white bg-[#212529] hover:bg-gray-600 w-full text-sm text-left"
                onClick={() => handleSortBy('date')}>
                Date
              </button>
              <button className="block px-4 py-2 text-white bg-[#212529] hover:bg-gray-600 w-full text-sm text-left"
                onClick={() => handleSortBy('pricing plan')}>
                Pricing plan
              </button>
              <button className="block px-4 py-2 text-white bg-[#212529] hover:bg-gray-600 w-full text-sm text-left"
                onClick={() => handleSortBy('status')}>
                Status
              </button>
            </div>
          )}
        </div>
        <div className="relative">
          <input
            type="text"
            className="bg-[#151f30] text-white border-none pl-8 pr-4 py-2 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Find users.."
            value={searchQuery}
            onChange={handleSearch}
          />
          <GoSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-8 bg-[#151f30] rounded-lg p-4 mb-4">
        <div>ID</div>
          <div>BASIC INFO</div>
          {/* <div>USERNAME</div> */}
          <div>PRICING PLAN</div>
          <div>COMMENTS</div>
          <div>REVIEWS</div>
          <div>STATUS</div>
          <div>CREATED DATE</div>
          <div>ACTIONS</div>
        </div>
        {(searchQuery.trim() !== '' ? searchResults : catalogData).map((item) => (
          <div key={item.id} className="grid grid-cols-8 bg-[#151f30] rounded-lg p-4 my-4">
            <div>{item.id}</div>
            <div style={{ display: 'flex' }}>
    <CgProfile style={{ color: 'blue', marginRight: '10px', fontSize: '2em' }} /> 
    <div style={{ marginLeft: '2px' }}>
      {item.basicInfo} <br />
      {item.username}
    </div>
  </div>
            <div>{item.pricingPlan}</div>
            <div>{item.comments}</div>
            <div>{item.reviews}</div>
            <div style={{ color: item.status === 'Approved' ? 'green' : item.status === 'Banned' ? 'red' : 'inherit' }}>{item.status}</div>
            <div>{item.createdDate}</div>
            <div style={{ verticalAlign: 'middle' }}>
              <IoIosLock style={{ color: 'green', cursor: 'pointer', display: 'inline-block', marginLeft: '5px' }} />
              <CgTrashEmpty style={{ color: 'red', cursor: 'pointer', display: 'inline-block' }} />
              <IoPencil style={{ color: 'blue', cursor: 'pointer', display: 'inline-block', marginLeft: '5px' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;