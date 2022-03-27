import React from "react";
import Card from "./elements/Card";

const Pricing = () => {
  return (
    <div className="w-full h-screen bg-pricing-bg bg-cover bg-center grid place-items-center lg:grid-cols-2 children:w-11/12 children:h-5/6 text-center p-4">
      <Card
        imageText="Thailand"
        textColor="text-white"
        h1Text="See More"
        bgImage="bg-thai"
      />
      <Card
        imageText="Cambodia"
        textColor="text-white"
        h1Text="See More"
        bgImage="bg-cambodia"
      />
      <Card
        imageText="Vietnam"
        textColor="text-white"
        h1Text="See More"
        bgImage="bg-vietnam"
      />
      <Card
        imageText="Myanmar"
        textColor="text-white"
        h1Text="See More"
        bgImage="bg-burma"
      />
    </div>
  );
};

export default Pricing;
