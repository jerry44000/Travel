import React from "react";
import AnotherCustomsBtn from "../elements/AnotherCustomsBtn.js";
import InputBox from "../elements/InputBox.js";

const Reservation = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-4 px-2 items-start w-full md:w-2/4 justify-center">
        <InputBox value="Name" placeValue="Enter your Name" />
        <InputBox value="Email" placeValue="exemple@gmail.com" />
        <InputBox
          value="Message"
          placeValue="ex: How to make a reservation ?"
        />
        <InputBox
          value="Message"
          placeValue="ex: How to make a reservation ?"
        />
        <div>
          <AnotherCustomsBtn children='Make Reservation' />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
