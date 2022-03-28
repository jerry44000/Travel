import React from "react";

const InputBox = ({ type, value, placeValue }) => {
  return (
    <div className="w-full">
      <label className="text-white">{value}</label>
      <input
        type={type}
        className="w-full p-4 text-slate-100 outline-none border-2 bg-transparent"
        placeholder={placeValue}
      />
    </div>
  );
};

export default InputBox;
