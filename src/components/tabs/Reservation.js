import React from "react";

const Reservation = () => {
  return (
    <div>
      <div>
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
      </div>
    </div>
  );
};

export default Reservation;
