import React from "react";

const CustomBtn = ({ onClickItem, btnPadding, children }) => {
  return (
    <button
      onClick={onClickItem}
      className={`px-12 py-3 bg-white/10 uppercase text-white rounded-md animate-pulse font-bold ${btnPadding}`}
    >
      {children}
    </button>
  );
};

export default CustomBtn;
