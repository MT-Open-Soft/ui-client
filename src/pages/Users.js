import React, { useState, useEffect } from "react";
// import { CgTrashEmpty } from "react-icons/cg";
// import { IoPencil } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
// import { IoIosLock } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
import baseURL from "../components/Config";
const Catalog = () => {
  const [sortBy, setSortBy] = useState("date"); // Default sorting option
  const [showOptions, setShowOptions] = useState(false); // State to track if options should be shown
  const [catalogData, setCatalogData] = useState([]);
  const token = localStorage.getItem('token');

  const handleSortBy = (option) => {
    if (option === "pricing plan") {
      // Sort by pricing plan in increasing order
      setCatalogData([
        ...catalogData.sort((a, b) => a["pricing plan"] - b["pricing plan"]),
      ]);
    } else {
      // Sort by other options
      setCatalogData([
        ...catalogData.sort((a, b) => (a[option] > b[option] ? 1 : -1)),
      ]);
    }
    setSortBy(option);
    setShowOptions(false); // Close the options after selecting one
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  useEffect(() => {
    axios.get(baseURL+"/admin/users", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then((response) => {
        console.log("Response:", response.data);
        setCatalogData(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

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

  return (
    <div className="bg-[#131720] text-white relative py-2 overflow-auto">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-3xl font-bold" style={{ fontFamily: "Rubik, sans-serif" }}>
          Users
        </h1>
       
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-4 bg-[#151f30] rounded-lg p-4 mb-4 pl-5">
          {/* <div className="ml-5">ID</div> */}
          <div className="ml-5">NAME</div>
          {/* <div>USERNAME</div> */}
          <div>EMAIL</div>
          <div>SUBSCRIPTION PLAN</div>
         
          <div>ROLE</div>
        </div>
        {(searchQuery.trim() !== "" ? searchResults : catalogData).map(
          (item) => (
            <div
              key={item.id}
              className="grid grid-cols-4 bg-[#151f30] rounded-lg p-4 my-4"
            >
              {/* <div className="ml-5">{item.id}</div> */}
              <div className="ml-5" style={{ display: "flex" }}>
                <CgProfile
                  style={{
                    color: "blue",
                    marginRight: "10px",
                    fontSize: "2em",
                  }}
                />
                <div style={{ marginLeft: "2px" }}>
                  {item.name}
                  {/* {item.username} */}
                </div>
              </div>
              <div>{item.email} </div>
              <div>{item.subscription}</div>
             
              <div>{item.role}</div>
             
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Catalog;