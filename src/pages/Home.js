import React from "react";
import Search from "../components/Search";
import ActiveSlider from "./Video";
import Language from "../components/Language";
// import Movies from "./Movies";
import ActionMovies from "./ActionMovies";
import ComedyMovies from "./ComedyMovies";
import RomanceMovies from "./RomanceMovies";
function Home() {
  

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
