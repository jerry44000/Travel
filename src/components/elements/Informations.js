import React, { useState } from "react";
import Requests from "../tabs/Requests.js";
import SendMessages from "../tabs/SendMessages.js";
import AnotherCustomsBtn from "./AnotherCustomsBtn.js";
import Reservation from "../tabs/Reservation.js";

const Informations = () => {
  const [tab, setTab] = useState("sendMessage");
  return (
    <div className="w-full min-h-screen bg-info-bg bg-cover bg-center bg-fixed text-white uppercase p-8">
      <div className="children:m-4">
        <AnotherCustomsBtn
          children="Send Message"
          onClick={() => setTab("sendMessage")}
        />
        <AnotherCustomsBtn
          children="Request Info"
          onClickItem={() => setTab("requestInfo")}
        />
        <AnotherCustomsBtn
          children="Make Reservation"
          onClickItem={() => setTab("makeReservation")}
        />
      </div>
      {tab === "sendMessage" && <SendMessages />}
      {tab === "requestInfo" && <Requests />}
      {tab === "makeReservation" && <Reservation />}
    </div>
  );
};

export default Informations;
