import React, { useState } from "react";
import axios from "axios";
import { CgDropOpacity, CgClose } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
const apiURL ="http://localhost:8080/api/v1/search/suggestions";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query !== "") {
      axios.get(`${apiURL}?query=${query}`)
        .then((res) => {
          console.log(res.data)
          setSearchResults(res.data); // Assuming the response is an array of results
        })
        .catch((error) => {
          console.error("Request failed:", error);
        });
    } else {
      setSearchResults([]);
    }
  };

  const redirectToSearchResults = () => {
    navigate(`/search-results/${searchQuery}`); // Adjust the path as necessary based on your routing setup
  };
  const handleInputChange = (e) => {
    const query = e.target.value;
    handleSearch(query);
  };

  const handleSelectResult = (result) => {
    setSearchQuery(result.title);
    setSearchResults([]);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate(`/search-results/${searchQuery}`);
    }
  };

  return (
    <div className="h-screen/4 flex flex-col justify-end pb-16" style={{
      backgroundImage: " linear-gradient(to bottom, rgba(6, 12, 23, 1), rgba(12, 19, 31, 0.7), rgba(16, 24, 39, 0.7), rgba(18, 29, 47, 0.85), rgba(21, 34, 56, 1)), url('https://img.freepik.com/free-photo/movie-background-collage_23-2149876003.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="h-14" />
      <div className="w-full max-w-xl mx-auto relative">
        <div className="flex items-center border bg-gray-800 border-gray-200 rounded-full focus:bg-gray-700 ">
          <input
            className="appearance-none block w-full bg-gray-800 text-white rounded-full py-2 px-4 leading-tight focus:outline-none focus:border-gray-500"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          
            <button
              className="text-white focus:outline-none ml-2 justify-end pr-6"
              onClick={handleClearSearch}
            >
              
              <CgClose className="w-5 h-5" />
            </button>
        
        </div>
        {searchResults.length > 0 && (
          <div className="relative grid items-center w-md">
            <div className="mt-2 w-full text-white rounded-lg shadow-md max-h-70 overflow-y-auto">
              <div className="bg-[#152238]">
                {searchResults.map((result) => (
                  <button
                    key={result.id}
                    className="block px-4 py-2 w-full text-left hover:bg-[#00102a]"
                    onClick={() => handleSelectResult(result)}
                  >
                    <div class="grid grid-cols-10 items-start">
                      <div className="md:shrink-0 md:mr-0 col-span-1" style={{ display: "inline-block" }}>
                        <img className="object-cover rounded-md" src={result.poster ? result.poster : 'https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg'} style={{ width: "50%", height: "50%" }} alt="poster" />
                      </div>
                      <div className="text-left md:ml-0 col-span-9">
                        <div className="text-left text-md font-body text-xs font-semibold">{result.title}</div>
                        <div className="grid grid-cols-12 text-left md:ml-0 text-gray-400" style={{ fontSize: "0.65rem" }}>
                          <div className="col-span-1">{result.type === 'movie' ? 'Movie' : result.type === 'tv show' ? 'TV Show' : result.type}</div>
                          <div className="col-span-1">★ {result.rating}</div>
                          <div className="col-span-1">• {result.year}</div>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <button
              type="button"
              className="block mx-auto py-1 px-2 text-white bg-[#1e3261] rounded-full shadow-md hover:bg-[#384b77] mt-2 w-auto max-w-xs"
              onClick={redirectToSearchResults}
            >
              Search Results
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;