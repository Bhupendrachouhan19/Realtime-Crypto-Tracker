import React from "react";
import LeftBody from "./LeftBody/LeftBody";
import RightBody from "./RightBody/RightBody";

const Body = () => {
  return (
    <div className="lg:flex items-start">
      {/* Left Body */}
      <LeftBody />
      
      {/* Right Body */}
      <RightBody />
    </div>
  );
};

export default Body;
