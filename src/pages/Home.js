import React from "react";
import Search from "../components/Search";
import ActiveSlider from "./Video";
import Language from "../components/Language";
import Movies from "./Movies";
function Home() {
  

  return (
    <div className="bg-[#152238]">
      <Search/>
      <Movies/>
      <ActiveSlider/>
      <Language/>

      
    </div>
  );
}

export default Home;
