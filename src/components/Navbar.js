import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const apiURL =
  "http://localhost:8080/api/v1/search/suggestions";



function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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

  const handleInputChange = (e) => {
    const query = e.target.value;
    handleSearch(query);
  };

  const handleSelectResult = (result) => {
    setSearchQuery(result.title);
    setSearchResults([]);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling on the background
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
    document.body.style.overflow = 'auto'; // Allow scrolling on the background
  };

  const openSignupModal = () => {
    setIsSignupModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling on the background
  };

  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
    document.body.style.overflow = 'auto'; // Allow scrolling on the background
  };

  const path = useLocation().pathname.substring(1);

  console.log(path);
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 py-4 lg:px-12 shadow border-solid border-t-2 border-blue-300">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
        <div className="flex items-center flex-shrink-0">
          <a href="/"> {/* Replace '/' with your actual home page path */}
            <img src="../images/logo.png" alt="Your Logo" className="h-8 w-8" />
          </a>
        </div>
        <div className="block lg:hidden">
          <button
            id="nav"
            className="flex items-center px-3 py-2 border-2 rounded text-white border-white hover:text-white hover:border-white"
            onClick={() => {
              toggleMenu();
              setIsSearchVisible(false);
            }}
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8 ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="text-md font-bold text-white lg:flex-grow">
          <a
            href="movies"
            onClick={() => {
              toggleMenu();
              setIsSearchVisible(true);
            }}
            className="block mt-4 lg:inline-block lg:mt-0 navbar-link hover:bg-blue-300 hover:text-white px-4 py-2 rounded"
          >
            Movies
          </a>
          <a
            href="series"
            onClick={() => {
              toggleMenu();
              setIsSearchVisible(true);
            }}
            className="block mt-4 lg:inline-block lg:mt-0 navbar-link hover:bg-blue-300 hover:text-white px-4 py-2 rounded"
          >
            Series
          </a>
          <a
            href="pricing"
            onClick={() => {
              toggleMenu();
              setIsSearchVisible(true);
            }}
            className="block mt-4 lg:inline-block lg:mt-0 navbar-link hover:bg-blue-300 hover:text-white px-4 py-2 rounded"
          >
            Pricing plans
          </a>
          <a
            href="profile"
            onClick={() => {
              toggleMenu();
              setIsSearchVisible(true);
            }}
            className="block mt-4 lg:inline-block lg:mt-0 navbar-link hover:bg-blue-300 hover:text-white px-4 py-2 rounded"
          >
            Profile
          </a>
        </div>
        {path === '' ? (
          <div className={`relative mx-auto text-gray-600 lg:hidden ${isLoginModalOpen || isSignupModalOpen ? 'blur' : ''}`}>
            <input
              className="border-2 border-gray-300 bg-gray-800 text-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
              <svg className="text-gray-600 h-16 w-16 fill-current">
                <path d="./images/search-icon.webp" />
              </svg>
            </button>
          </div>
        ) : (
          <div className={`relative mx-auto text-gray-600 z-10 ${isLoginModalOpen || isSignupModalOpen ? 'blur' : ''}`}>
            <input
              className="border-2 border-gray-300 bg-gray-800 text-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
              value={searchQuery}
              onChange={handleInputChange}
            />
            {(searchQuery==='')?(<></>):(<div className="py-1 absolute right-0 mt-2 w-full bg-transparent rounded-lg shadow-md max-h-70 overflow-y-auto backdrop-blur-md">
              {searchResults.map((result) => (
                <button
                  key={result.id}
                  className="block px-4 py-2 text-slate-200 hover:bg-slate-200 hover:text-gray-800 w-full text-left"
                  onClick={() => handleSelectResult(result)}
                >
                  
                 
                  <div class="grid grid-cols-2 gap-4">
                  <div>{result.title}</div>
                  <div>{result.year}</div>
                  </div>
                 
                </button>
              ))}
            </div>)}
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
              <svg className="text-gray-600 h-16 w-16 fill-current">
                <path d="./images/search-icon.webp" />
              </svg>
            </button>
          </div>
        )}

        <div className="flex">
          <a
            href="#"
            onClick={openSignupModal}
            className="block text-md px-4 py-2 rounded text-blue-300 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-300 lg:mt-0"
          >
            Sign up
          </a>
          <a
            href="#"
            onClick={openLoginModal}
            className="block text-md px-4 ml-2 py-2 rounded text-blue-300 font-bold hover:text-white mt-4 hover:bg-blue-300 lg:mt-0"
          >
            Login
          </a>
        </div>
      </div>

      {isLoginModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Login</h2>
            {/* Add your login form here */}
            <button className="bg-blue-800 text-white px-4 py-2 rounded-lg" onClick={closeLoginModal}>Close</button>
          </div>
        </div>
      )}

      {isSignupModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                <div className="bg-white p-8 rounded-lg">
                  <h2 className="text-lg font-bold mb-4 text-left">FlixTV</h2>

                  {/* Add your sign up form here */}
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={closeSignupModal}>Sign Up</button>
                </div>
              </div>
            )}
      
          </nav>
        );
      }
      
      export default Navbar;
      