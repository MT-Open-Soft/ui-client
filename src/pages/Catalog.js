import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faStar, faSearch } from '@fortawesome/free-solid-svg-icons';
import { CgLock } from 'react-icons/cg';
import { IoEyeOutline } from 'react-icons/io5';
import { GoPencil } from 'react-icons/go';

const Catalog = () => {
  const [sortBy, setSortBy] = useState('date'); // Default sorting option
  const [showOptions, setShowOptions] = useState(false); // State to track if options should be shown

  const handleSortBy = (option) => {
    if (option === 'rating') {
      // Sort by rating in increasing order
      setCatalogData([...catalogData.sort((a, b) => a.rating - b.rating)]);
    } else {
      // Sort by other options
      setCatalogData([...catalogData.sort((a, b) => (a[option] > b[option]) ? 1 : -1)]);
    }
    setSortBy(option);
    setShowOptions(false); // Close the options after selecting one
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const [catalogData, setCatalogData] = useState([
    {
      id: 23,
      title: 'Blindspotting',
      rating: 7.9,
      category: 'Movie',
      views: 1392,
      status: 'Visible',
      createdDate: '23 Oct 2021'
    },
    {
      id: 24,
      title: 'Benched',
      rating: 7.1,
      category: 'Movie',
      views: 1093,
      status: 'Hidden',
      createdDate: '20 Oct 2021'
    },
    {
      id: 25,
      title: 'Whitney',
      rating: 6.3,
      category: 'TV Show',
      views: 723,
      status: 'Visible',
      createdDate: '24 Oct 2021'
    },
    {
      id: 26,
      title: 'BlindSpotting',
      rating: 7.9,
      category: 'Movie',
      views: 1392,
      status: 'Hidden',
      createdDate: '14 Oct 2021'
    },
  ]);

  const [searchQuery, setSearchQuery] = useState(''); // State to track the search query
  const [searchResults, setSearchResults] = useState([]); // State to store search results

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    const results = catalogData.filter(item => item.title.toLowerCase().includes(query));
    setSearchResults(results);
  };

  return (
    <div className="bg-[#212529] text-white relative">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-3xl font-bold" style={{ fontFamily: 'Rubik, sans-serif' }}>Catalog</h1>
        <div className="relative">
          <span className="text-sm text-white mr-2">Sort By:</span>
          <button className="text-sm text-white hover:text-gray-300" onClick={toggleOptions}>
            {sortBy === 'date' ? 'Date' : (sortBy === 'rating' ? 'Rating' : 'Views')}
          </button>
          {showOptions && (
            <div className="absolute mt-2 right-0">
              <button className="block px-4 py-2 text-white bg-[#212529] hover:bg-gray-600 w-full text-sm text-left"
                onClick={() => handleSortBy('date')}>
                Date
              </button>
              <button className="block px-4 py-2 text-white bg-[#212529] hover:bg-gray-600 w-full text-sm text-left"
                onClick={() => handleSortBy('rating')}>
                Rating
              </button>
              <button className="block px-4 py-2 text-white bg-[#212529] hover:bg-gray-600 w-full text-sm text-left"
                onClick={() => handleSortBy('views')}>
                Views
              </button>
            </div>
          )}
        </div>
        <div className="relative">
          <input
            type="text"
            className="bg-[#151f30] text-white border-none pl-8 pr-4 py-2 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Find movies/TV series"
            value={searchQuery}
            onChange={handleSearch}
          />
          <FontAwesomeIcon icon={faSearch} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-8 bg-[#151f30] rounded-lg p-4 mb-4">
          <div>ID</div>
          <div>TITLE</div>
          <div>RATING</div>
          <div>CATEGORY</div>
          <div>VIEWS</div>
          <div>STATUS</div>
          <div>CREATED DATE</div>
          <div>ACTIONS</div>
        </div>
        {(searchQuery.trim() !== '' ? searchResults : catalogData).map((item) => (
          <div key={item.id} className="grid grid-cols-8 bg-[#151f30] rounded-lg p-4 my-4">
            <div>{item.id}</div>
            <div>{item.title}</div>
            <div>{item.rating} <FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} /></div>
            <div>{item.category}</div>
            <div>{item.views}</div>
            <div style={{ color: item.status === 'Visible' ? 'green' : 'red' }}>{item.status}</div>
            <div>{item.createdDate}</div>
            <div style={{ verticalAlign: 'middle' }}>
              <CgLock style={{ color: 'green', marginRight: '5px', display: 'inline-block' }} />
              <IoEyeOutline style={{ color: 'yellow', marginRight: '5px', display: 'inline-block', fontSize: '1.2em' }} />
              <GoPencil style={{ color: 'blue', marginRight: '5px', display: 'inline-block', fontSize: '1.2em' }} />
              <FontAwesomeIcon icon={faTrashAlt} style={{ color: 'red', cursor: 'pointer', display: 'inline-block' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;