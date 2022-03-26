import React from "react";
import CustomsBtn from "../elements/CustomsBtn.js";
import videoBg from "../assets/travel.mp4";

const Section = () => {
  return (
    <div className="w-full bg-hero-vid h-screen flex items-center justify-center static">
      <video src={videoBg} autoPlay loop muted className="object-cover"></video>
      <div className="text-white text-center absolute uppercase sm:w-3/4 lg:w-2/4 bg-black/50 p-8 rounded-lg">
        <h1 className="res-font-sm font-bold">Asia trips</h1>
        <p className="res-font font-extrabold py-2">Best Asia Tour Companies</p>
        <h3 className="res-font-usm p-2">Join us</h3>
        <CustomsBtn children="start" />
      </div>
    </div>
  );
};

export default Section;
