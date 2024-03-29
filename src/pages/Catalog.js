import React, { useState, useEffect } from "react";
import { CgTrashEmpty } from "react-icons/cg";
import { IoPencil } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { FaLock } from "react-icons/fa6";
import { FaLockOpen } from "react-icons/fa6";
import axios from "axios";

const Catalog = () => {
  const [sortBy, setSortBy] = useState("date");
  const [showOptions, setShowOptions] = useState(false);
  const [catalogData, setCatalogData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [pageSize] = useState(50);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/movies?page=${currentPage}&pageSize=${pageSize}`
        );
        if (Array.isArray(response.data.movies)) {
          setCatalogData(response.data.movies);
          setTotalPages(response.data.totalPages); // Set total pages
        } else {
          console.error("Fetched data is not an array:", response.data.movies);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleSortBy = (option) => {
    let sortedData;
    if (option === "rating") {
      // Sort by rating in increasing order
      sortedData = [...catalogData.sort((a, b) => a.rating - b.rating)];
    } else {
      // Sort by other options
      sortedData = [
        ...catalogData.sort((a, b) => (a[option] > b[option] ? 1 : -1)),
      ];
    }
    setCatalogData(sortedData);
    setSortBy(option);
    setShowOptions(false);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    const results = catalogData.filter((item) =>
      item.title.toLowerCase().includes(query)
    );
    setSearchResults(results);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleLockToggle = async (item) => {
    try {
      const updatedCatalogData = catalogData.map((movie) => {
        if (movie._id === item._id) {
          // Toggle premium status
          const updatedMovie = { ...movie, premium: !movie.premium };
          // Update the UI
          return updatedMovie;
        }
        return movie;
      });
      setCatalogData(updatedCatalogData);
      
    } catch (error) {
      console.error("Error toggling premium status:", error);
    }
  };

  return (
    <div className="bg-[#131720] text-white relative py-2">
      <div className="flex justify-between items-center px-6 py-4">
        <h1
          className="text-3xl font-bold"
          style={{ fontFamily: "Rubik, sans-serif" }}
        >
          Catalog
        </h1>
        
        <div className="relative">
          <span className="text-sm text-white mr-2">Sort By:</span>
          <button
            className="text-sm text-white hover:text-gray-300"
            onClick={toggleOptions}
          >
            {sortBy === "date"
              ? "Date"
              : sortBy === "rating"
              ? "Rating"
              : "Views"}
          </button>
          {showOptions && (
            <div className="absolute mt-2 right-0">
              <button
                className="block px-4 py-2 text-white bg-[#131720] hover:bg-gray-600 w-full text-sm text-left"
                onClick={() => handleSortBy("date")}
              >
                Date
              </button>
              <button
                className="block px-4 py-2 text-white bg-[#131720] hover:bg-gray-600 w-full text-sm text-left"
                onClick={() => handleSortBy("rating")}
              >
                Rating
              </button>
              <button
                className="block px-4 py-2 text-white bg-[#131720] hover:bg-gray-600 w-full text-sm text-left"
                onClick={() => handleSortBy("views")}
              >
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
          <GoSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <hr class="h-[1px] w-5/6 mx-auto my-8 bg-white border-0 dark:bg-gray-700"></hr>

      <div className="container mx-auto bg-[#131720]">
        <div className="grid grid-cols-8 text-xs p-4 mb-4">
          <div className="ml-4">TYPE</div>
          <div className="col-span-2">TITLE</div>
          <div>IMDb RATING</div>
          <div>RELEASE YEAR</div>
          <div>RUNTIME</div>
          <div>LANGUAGES</div>
          {/* <div>STATUS</div> */}
          <div>ACTIONS</div>
        </div>
        {(searchQuery.trim() !== "" ? searchResults : catalogData).map(
          (item) => (
            <div
              key={item.id}
              className="grid grid-cols-8 bg-[#151f30] rounded-lg p-4 my-4"
            >
              <div className="ml-4">{item.type}</div>
              <div className="col-span-2">{item.title}</div>
              <div className="flex items-center">
                <CiStar style={{ color: "#2f80ed", marginRight: "10px" }} />{" "}
                {item.imdbRating}{" "}
              </div>
              <div>{item.releaseYear}</div>
              <div>{item.runtimeInMinutes} m</div>
              <div>{item.languages.join(", ")}</div>
              {/* <div>{item.premium}</div> */}
              <div style={{ verticalAlign: "middle" }}>
                {item.premium ? (
                  <FaLock style={{color: "green", cursor: "pointer", display: "inline-block",}} onClick={() => handleLockToggle(item)} />) : (<FaLockOpen style={{color: "red", cursor: "pointer", display: "inline-block",}} onClick={() => handleLockToggle(item)}/>)}
                <CgTrashEmpty style={{ color: "red", cursor: "pointer", display: "inline-block", marginLeft: "25px", }}/>
                {/* <IoEyeOutline style={{ color: 'yellow', cursor: 'pointer', display: 'inline-block', marginLeft: '5px' }} /> */}
                {/* <IoPencil style={{color:"blue", cursor: "pointer", display: "inline-block", marginLeft: "15px"}} /> */}
              </div>
            </div>
          )
        )}

        <div className="flex justify-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className={`mx-1 px-3 py-1 rounded-full bg-[#374151] text-white ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-500"
            }`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-white mx-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className={`mx-1 px-3 py-1 rounded-full bg-[#374151] text-white ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-500"
            }`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
