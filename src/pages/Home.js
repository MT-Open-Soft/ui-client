import React from "react";
import Search from "../components/Search";
import ActiveSlider from "./Video";
import Language from "../components/Language";
function Home() {
  

  return (
    <div className="bg-[#152238]">
      <Search/>
      <Language/>
      <ActiveSlider/>
      
    </div>
  );
}

export default Home;
