import React from "react";

const Cards = ({ imageText, h1Text }) => {
  return (
    <div className="relative hover:opacity-80 shadow-md transition-all cursor-pointer p-4 bg-blue-200/10 backdrop-blur-lg">
      <div>
        <h1>{imageText}</h1>
      </div>
      <div>
        <h1>{h1Text}</h1>
      </div>
    </div>
  );
};

export default Cards;
