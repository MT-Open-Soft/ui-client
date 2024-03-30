import React ,{useEffect} from "react";
import axios from "axios";

import Search from "../components/Search";
import ActiveSlider from "./Video";
import Language from "../components/Language";
// import Movies from "./Movies";
import ActionMovies from "./ActionMovies";
import ComedyMovies from "./ComedyMovies";
import RomanceMovies from "./RomanceMovies";
function Home() {

  var token = localStorage.getItem('token');
  const apiURL = "http://localhost:8080/api/v1/user";  
 
  useEffect(() => {
    const getUserData = async () => {
      const result = await axios
      .get(`${apiURL}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((e) => {
        console.error(e)
        
      });
      console.log('result', result)
    if(result) {
      localStorage.setItem('name', result.name)
      localStorage.setItem('role', result.role)
      localStorage.setItem('subscription', result.subscription)
      
    }}
    getUserData();
    
  }, []);
  return (
    <div className="bg-[#152238]">
      <Search/>
      <ActiveSlider/>
      <ActionMovies/>
      <ComedyMovies />
      <RomanceMovies />

      <Language/>

    </div>
  );
}

export default Home;
