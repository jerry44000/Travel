import React from "react";
import Cards from "./elements/Cards.js";
import pgb from "./assets/pgb.jpg";

const Pricing = () => {
  return (
    <div className="w-full h-screen grid place-items-center lg:grid-cols-2 bg-cover bg-center">
      <Cards imageText="hello" h1Text="Hi"/>
      <Cards imageText="hello" h1Text="Hi" />
      <Cards imageText="hello" h1Text="Hi" />
      <Cards imageText="hello" h1Text="Hi" />
    </div>
  );
};

export default Pricing;
