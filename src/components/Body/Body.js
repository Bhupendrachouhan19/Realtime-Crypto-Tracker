import React from "react";
import LeftBody from "./LeftBody/LeftBody";
import RightBody from "./RightBody/RightBody";

const Body = () => {
  return (
    <div className="md:flex ">
      {/* Left Body */}
      <LeftBody />
    </div>
  );
};

export default Body;
