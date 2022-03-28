import React from "react";
import AnotherCustomsBtn from "./AnotherCustomsBtn.js";
import videoBg from "../assets/travel.mp4";

const Section = () => {
  return (
    <div className="w-full h-screen bg-travel-bg bg-cover bg-center bg-fixed  flex items-center justify-center">
      <div className="text-white text-center absolute uppercase sm:w-3/4 lg:w-2/4 bg-black/50 p-8 rounded-lg">
        <h1 className="res-font-sm font-bold">Asia trips</h1>
        <p className="res-font font-extrabold py-2">Best Asia Tour Companies</p>
        
        <AnotherCustomsBtn children="Join Us" />
      </div>
    </div>
  );
};

export default Section;
