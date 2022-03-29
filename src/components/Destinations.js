import React from "react";
import Card from "./elements/card/Card";
import contents from "../data-content/contents.js";

const Destinations = () => {
  return (
    <div
      id="destinations"
      className="w-full h-full bg-pricing-bg bg-cover bg-center bg-fixed grid place-items-center lg:grid-cols-2"
    >
      {contents.map((content) => (
        <Card
          title={content.title}
          image={content.image}
          description={content.description}
          key={content.title}
        />
      ))}
    </div>
  );
};

export default Destinations;
