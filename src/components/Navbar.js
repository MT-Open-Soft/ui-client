import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { FaUser } from 'react-icons/fa';
import SignUp from './SignUp.js';
import SignIn from './SignIn.js';
import { CgDropOpacity, CgClose } from "react-icons/cg";


const apiURL =
  "http://localhost:8080/api/v1/search/suggestions";


function Navbar() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic
    setIsLoggedIn(false);
  };

  const navigate = useNavigate();

  const handleClickProfile = () => {
    // Redirect to the desired page
    navigate('/profile');
  };
  
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
          setSearchResults(res.data);
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

  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
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
            href="movie"
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
          
        </div>
        {path === '' ? (
          <div className={`relative mx-auto text-gray-600 z-10 lg:hidden ${isLoginModalOpen || isSignupModalOpen ? 'blur' : ''}`}>
            <input
              className="border-2 border-gray-300 bg-gray-800 text-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-2" >
              <svg className="text-gray-600 h-16 w-16 fill-current">
                <path d="./images/search-icon.webp" />
              </svg>
            </button>
          </div>
        ) : (
          <div className={`relative mx-auto text-gray-600 z-10 ${isLoginModalOpen || isSignupModalOpen ? 'blur' : ''}`}>

            <div className='bg-gray-800 border-gray-200 rounded-full focus:bg-gray-700 flex items-center border-2 pl-4 ml-4 border-gray-300'><input
            className=" bg-gray-800 text-white h-8 pr-8 rounded-full text-sm focus:outline-none w-64"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleInputChange}
          />
          
            <button
              className="text-white hover:text-gray-400 ml-2 pr-4"
              onClick={handleClearSearch}
            >
              
              <CgClose className="w-5 h-5"/>
            </button>
            </div> 
            {(searchQuery==='')?(<><div className="py-1 absolute right-0 mt-2 w-full  rounded-lg z-100 shadow-md max-h-70 overflow-y-auto">
              {searchResults.map((result) => (
                <button
                  key={result.id}
                  className="block pl-2 px-4 py-2 w-full text-left"
                  onClick={() => handleSelectResult(result)}
                >
                  
                 

                 
                </button>
              ))}
            </div>
          </>):(<div className="py-1 absolute right-0 mt-2 bg-[#152238] rounded-lg z-100 shadow-md max-h-70 overflow-y-auto  ">
              {searchResults.map((result) => (
                <button
                  key={result.id}
                  className="block px-4 py-1 text-gray-800 hover:bg-[#00102a] w-full text-left"
                  onClick={() => handleSelectResult(result)}
                >
                  
                  <div class="grid grid-cols-4 items-start text-white  ">
    <div className="md:shrink-0 md:mr-0 col-span-1" style={{display:"inline-block"}}><img  className="object-cover rounded-md" src={result.poster} style={{width:"50%",height:"50%"}}></img></div>
    <div className="text-left md:ml-0 col-span-3">
        <div className="text-left text-md font-body text-xs ">{result.title}</div>
        <div className="grid grid-cols-3 text-xxs text-left md:ml-0 text-gray-400" style={{ fontSize: '0.65rem' }}>
        <div className="col-span-1">{result.type === 'movie' ? 'Movie' : result.type === 'tv show' ? 'TV Show' : result.type}</div>
            <div className="col-span-1">★ {result.rating}</div>
            <div className="col-span-1">• {result.year}</div>
        </div>
    </div>
</div>
                 
                </button>
              ))}
            </div>)}
          </div>
        )}

        <div>
          {isLoggedIn?(
          <>
          <button
      onClick={handleClickProfile()}
      className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      <FaUser className="w-5 h-5 mr-2" />
      Profile
    </button>
          </>):(<div className="flex">
          <a
            href="#"
            onClick={openSignupModal}
            className="block text-md px-4 py-2 rounded text-blue-300 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-300 lg:mt-0"
          >
            Sign up
          </a>
          <a
            href="#"
            onClick={
              ()=>{
                openLoginModal()
                
              }           
            }
            className="block text-md px-4 ml-2 py-2 rounded text-blue-300 font-bold hover:text-white mt-4 hover:bg-blue-300 lg:mt-0"
          >
            Login
          </a>
        </div>)}
        </div>
      </div>

      {isLoginModalOpen && <SignIn closeLoginModal={() => setIsLoginModalOpen(false)} />}
      {isSignupModalOpen && <SignUp closeSignupModal={() => setIsSignupModalOpen(false)} />}
      
          </nav>
        );
      }
      
      export default Navbar;
      