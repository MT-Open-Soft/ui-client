import React, { useState } from 'react';

import axios from 'axios';

const Search = () =>{
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  
    if (query !== '') {
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => {
          setSearchResults(response.data.slice(0, 4)); 
        console.log(response.data.slice(0, 4));
          console.log(response.data)
        })
        .catch(error => {
          console.error('Error fetching search results:', error);
        });
    } else {
      setSearchResults([]);
    }
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    handleSearch(query);
  };

  const handleSelectResult = (result) => {
    setSearchQuery(result.title);
    setSearchResults([]);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
            <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleInputChange}
            />
            {searchResults.length > 0 && (
                <div className="relative">
                    <button
                        type="button"
                        className="inline-block w-full py-2 px-4 text-white bg-blue-800 rounded-full shadow-md focus:bg-blue-200"
                    >
                        Search Results
                    </button>
                    <div className="absolute right-0 mt-2 w-full bg-white rounded-lg shadow-md max-h-70 overflow-y-auto ">
                        <div className="py-1">
                            {searchResults.map(result => (
                                <button
                                    key={result.id}
                                    className="block px-4 py-2 text-gray-800 
                                    bg-slate-300
                                    hover:bg-gray-000 w-full text-left"
                                    onClick={() => handleSelectResult(result)}
                                >
                                    {result.title}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
  );
};

export default Search;