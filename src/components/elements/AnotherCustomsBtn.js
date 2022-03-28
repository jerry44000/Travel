import React from "react";

const AnotherCustomsBtn = ({ children }) => {
  return (
    <button className="animate-pulse inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
        {children}
    </button>
  );
};

export default AnotherCustomsBtn;
