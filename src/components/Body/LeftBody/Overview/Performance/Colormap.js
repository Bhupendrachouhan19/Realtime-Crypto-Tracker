import React, { useState } from "react";
import "./performance.css";

const Colormap = ({low, high}) => {
  let [value, setValue] = useState(0);
  let [valueWithComma, setValueWithComma] = useState(0);

    let min = low, max = high;
    
  return (
    <div className="flex relative flex-col md:w-[70%] justify-center items-center">
      <input
        type="range"
        name="rangeSlider"
        value="0"
        min={min}
        max={max}
        onInput={(e) => {
          setValue(e.target.value);
          setValueWithComma(parseInt(e.target.value).toLocaleString("en-US"));
        }}
        id="slider"
        className="appearance-none bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full border-none outline-none w-full cursor-pointer"
      />
      <div
        className={`absolute top-4
        left-[calc(${100 * ((value - min) / (max - min)) - 8.5}%)] 
        md:left-[calc(${100 * ((value - min) / (max - min)) - 1}%)] 
        px-1 `}
      >
        <div className="text-left">
          <ion-icon name="caret-up"></ion-icon>
        </div>
        <div className="text-gray-500 md:text-xl font-semibold translate-x-[-50%]">${valueWithComma}</div>
      </div>
    </div>
  );
};

export default Colormap