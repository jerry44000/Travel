import React from "react";
import AnotherCustomsBtn from "../elements/AnotherCustomsBtn.js";
import InputBox from "../elements/InputBox.js";

const Requests = () => {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-4 items-start w-full md:w-2/4 justify-center">
        <InputBox value="Email" placeValue="exemple@gmail.com" />
        <AnotherCustomsBtn children="request info" />
      </div>
    </div>
  );
};

export default Requests;
