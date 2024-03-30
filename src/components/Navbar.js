import React, { useState , useEffect} from "react";
import { useLocation, Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom for navigation
import axios from "axios";
import { FaUser } from "react-icons/fa";
import SignUp from "./SignUp.js";
import SignIn from "./SignIn.js";
import { CgDropOpacity, CgClose } from "react-icons/cg";
import logo from "../images/logo.png";
import Swal from "sweetalert2";

const apiURL = "http://localhost:8080/api/v1/search/suggestions"; 
function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // const handleLogin =(name) => {
  //   setIsLoggedIn(true);
  //   setUserName(name);
  // };

  const handleLogout =() => {
    localStorage.clear();
    setIsLoggedIn(false);
    document.getElementById("overlay").style.display = "block";
    Swal.fire({
      icon: 'success',
      title: 'Logout Successful!',
      toast: true,
      allowOutsideClick: false,
    })
    .then(function(){
      document.getElementById("overlay").style.display = "none";
      window.location = "http://localhost:3000/";
    });
  };

  const navigate = useNavigate();

  const handleClickProfile = () => {
    navigate("/profile");
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
      axios
        .get(`${apiURL}?query=${query}`)
        .then((res) => {
          console.log(res.data);
          setSearchResults(res.data); // Assuming the response is an array of results
        })
        .catch((error) => {
          console.error("Request failed:", error);
        });
    } else {
      setSearchResults([]);
    }
  };

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  const handleInputChange = (e) => {
    const query = e.target.value;
    handleSearch(query);
  };

  const handleSelectResult = (result) => {
    const token = localStorage.getItem("token");
    if (!token) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must be logged in to view this content.",
        toast: true,
        html: '<a href="/login" class="text-blue-500 hover:underline">Login now</a>',
      });
      return;
    }
    navigate(`/movie/${result._id}`);
    setSearchQuery(result.title);
    setSearchResults([]);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  // const closeLoginModal = () => {
  //   setIsLoginModalOpen(false);
  //   document.body.style.overflow = "auto";
  // };

  const openSignupModal = () => {
    setIsSignupModalOpen(true);
    document.body.style.overflow = "hidden"; 
  };

  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
    document.body.style.overflow = "auto"; 
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  const path = useLocation().pathname.substring(1);
  const redirectToSearchResults = () => {
    navigate(`/search-results/${searchQuery}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate(`/search-results/${searchQuery}`);
      setSearchQuery("");
      setSearchResults([]);
    }
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 py-4 lg:px-12 shadow border-solid border-t-2 border-blue-300">
      <div id="overlay" className="fixed top-0 left-0 w-[100%] h-[100%] bg-transparent z-50" style={{
        display: "none"
      }}></div>
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
        <div className="flex items-center flex-shrink-0">
          <a href="/">
            <img src={logo} alt="Your Logo" className="h-12 w-12" />
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
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-md font-bold text-white lg:flex-grow">
          {/* Genre Dropdown */}
          <div className="group inline-block relative">
           <button className="text-white font-semibold py-2 px-4 rounded inline-flex items-center text-lg hover:bg-gray-900 hover:text-white w-32 justify-center">     
               <span>Genres</span>
           </button>
           <ul className="absolute hidden text-gray-700 pt-1 group-hover:block bg-gray-800 bg-opacity-90 rounded-lg shadow-md max-h-[300px] overflow-y-auto grid grid-cols-2 left-1/2 transform -translate-x-1/2 z-50">              {[
               "Drama", "Comedy", "Romance", "Crime", "Action",
               "Adventure", "Documentary", "Horror", "Biography",
               "Family", "Mystery", "Fantasy", "Sci-Fi",
               "Animation", "History", "Music", "War", "Short", "Musical", "Sport",
               "Western", "Film-Noir", "News", "Talk-Show"
             ].map(genre => (
                   <li key={genre} className="w-full">
                     <Link to={"/" + genre.toLowerCase()} className="block py-2 px-6 hover:bg-gray-600 text-white whitespace-no-wrap">{genre}</Link>
                   </li>
                 ))}
               </ul>
         </div>



          <Link
            to={`/plans`}
            onClick={() => {
              toggleMenu();
              setIsSearchVisible(true);
            }}
            className="block mt-4 lg:inline-block lg:mt-0 navbar-link hover:bg-gray-900 hover:text-white px-4 py-2 rounded text-lg"
          >
            Pricing
          </Link>
        </div>

        {path === "" ? (
          <div
            className={`relative mx-auto max-w-2xl w-96 min-w-2xl text-gray-600 lg:hidden ${
              isLoginModalOpen || isSignupModalOpen ? "blur" : ""
            }`}
          >
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
          <div
            className={`relative mx-auto min-w-md w-80 text-gray-600 z-10 ${
              isLoginModalOpen || isSignupModalOpen ? "blur" : ""
            }`}
          >
            <div className="flex items-center border bg-gray-800 border-gray-200 rounded-full focus:bg-gray-700 ">
              <input
                className="appearance-none block w-full bg-gray-800 text-white rounded-full py-1 px-4 leading-tight focus:outline-none focus:border-gray-500"
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />

              <button
                className="text-white focus:outline-none ml-2 justify-end pr-6 hover:text-gray-500"
                onClick={handleClearSearch}
              >
                <CgClose className="w-5 h-5" />
              </button>
            </div>
            {searchQuery === "" ? (
              <>
                <div className="py-1 absolute right-0 mt-2 w-full  rounded-lg z-100 max-h-70 overflow-y-auto">
                  {searchResults.map((result) => (
                    <button
                      key={result._id}
                      className="block pl-2 px-4 py-2 w-full text-left"
                      onClick={() => handleSelectResult(result)}
                    ></button>
                  ))}
                </div>
              </>
            ) : (
              <div className="py-1 absolute right-0 mt-2 text-white w-full bg-[#152238] rounded-lg shadow-md max-h-70 overflow-y-auto">
                {searchResults.map((result) => (
                  <button
                    key={result.id}
                    className="block px-4 py-2 text-gray-800hover:bg-gray-000 w-full hover:bg-[#00102a] text-left"
                    onClick={() => handleSelectResult(result)}
                  >
                    <div class="grid grid-cols-4 items-start text-white  ">
                      <div
                        className="col-span-1"
                        style={{ display: "inline-block" }}
                      >
                        <img
                          className="object-cover rounded-md ml-5 justify-right"
                          src={
                            result.poster
                              ? result.poster
                              : "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg"
                          }
                          style={{ width: "50%", height: "50%" }}
                        ></img>
                      </div>
                      <div className="text-left md:ml-0 col-span-3">
                        <div className="text-left text-md font-body text-xs ">
                          {result.title}
                        </div>
                        <div
                          className="grid grid-cols-5 text-xxs text-left md:ml-0 text-gray-400"
                          style={{ fontSize: "0.65rem" }}
                        >
                          <div className="col-span-1">
                            {result.type === "movie"
                              ? "Movie"
                              : result.type === "tv show"
                              ? "TV Show"
                              : result.type}
                          </div>
                          <div className="col-span-1">★ {result.rating}</div>
                          <div className="col-span-1">• {result.year}</div>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}<button type="button"
                className="block mx-auto py-1 px-2 mb-4 text-white bg-[#1e3261] rounded-full shadow-md hover:bg-[#384b77] w-auto max-w-xs text-sm"
                onClick={redirectToSearchResults}>Search Results</button>
              </div>
            )}
            
          </div>
        )}

        <div>
        {isLoggedIn ? (
          <div className="flex items-center ml-4">
            <button
              onClick={handleClickProfile}
              className="flex items-center p-2 rounded-2xl shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FaUser className="w-3 h-3 rounded-lg" />
            </button>
            <button
              onClick={handleLogout}
              className="block text-md px-4 ml-2 py-2 rounded text-blue-300 font-bold hover:text-white mt-4 hover:bg-blue-300 lg:mt-0"
            >
              Logout
            </button>
          </div>
        ) : (
            <div className="flex">
              <a
                href="/signup"
                onClick={openSignupModal}
                className="block text-md px-4 py-2 rounded text-blue-300 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-300 lg:mt-0"
              >
                Sign up
              </a>
              <a
                href="/login"
                onClick={() => {
                  openLoginModal();
                  console.log(isLoginModalOpen)
                }}
                className="block text-md px-4 ml-2 py-2 rounded text-blue-300 font-bold hover:text-white mt-4 hover:bg-blue-300 lg:mt-0"
              >
                Login
              </a>
            </div>
          )}
        </div>
      </div>

      {isLoginModalOpen && (
        <SignIn  closeLoginModal={() => setIsLoginModalOpen(false)} />
      )}
      {isSignupModalOpen && (
        <SignUp closeSignupModal={() => setIsSignupModalOpen(false)} />
      )}
    </nav>
  );
}

export default Navbar;