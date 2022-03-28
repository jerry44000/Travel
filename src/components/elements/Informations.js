import React from "react";
import Requests from "../tabs/Requests.js";
import SendMessages from "../tabs/SendMessages.js";
import AnotherCustomsBtn from "./AnotherCustomsBtn.js";

const Informations = () => {
  return (
    <div className="w-full min-h-screen bg-info-bg bg-cover bg-center bg-fixed text-white uppercase p-8">
      <div className="children:m-4">
        <AnotherCustomsBtn children="Send Message" />
        <AnotherCustomsBtn children="Request Info" />
        <AnotherCustomsBtn children="Make Reservation" />
      </div>
      <SendMessages />
      <Requests />
    </div>
  );
};

export default Informations;
