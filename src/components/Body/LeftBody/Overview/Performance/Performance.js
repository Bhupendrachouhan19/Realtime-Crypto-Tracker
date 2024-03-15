import React, { useState } from "react";
import "./performance.css";

const Performance = () => {
  let [value, setValue] = useState(0);

  const sliderValue = document.getElementById("sliderValue");

  const handleSliderChange = (event) => {
    setValue(event.target.value);
    if (sliderValue) {
      sliderValue.textContent = value;
      sliderValue.style.left = value;
    }
  };

  return (
    <div>
      <div className="my-6 ml-3 text-3xl font-bold">Performance</div>
      <div className="flex flex-col gap-8">
        <div className="flex border justify-around text-center w-full">
          <div className="flex flex-col gap-2 grow">
            <div className="text-sm text-gray-600">Today's Low</div>
            <div>{[164356487].toLocaleString("en-US")}</div>
          </div>
          <div className="flex flex-col h-[45%] md:w-[70%] border-4 justify-center items-center">
            <input
              type="range"
              name="rangeSlider"
              value={value}
              min={46930}
              max={49343}
              id="mySlider"
              className="appearance-none bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full max-h-fit border-none h-[50%] w-full"
              onChange={(e) => handleSliderChange(e)}
            />
            <div id="sliderValue-container" className="relative w-full">
              <span
                id="sliderValue"
                className="absolute text-2xl text-gray-600 "
              >
                {value}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 grow">
            <div className="text-sm text-gray-600">Today's High</div>
            <div>{[435648732].toLocaleString("en-US")}</div>
          </div>
        </div>
        <div className="flex border justify-around text-center w-full">
          <div className="flex flex-col gap-2 grow">
            <div className="text-sm text-gray-600">Today's Low</div>
            <div>{[164356487].toLocaleString("en-US")}</div>
          </div>
          <div className="flex w-[45%] md:w-[70%] border-4">Colored Line</div>
          <div className="flex flex-col gap-2 grow">
            <div className="text-sm text-gray-600">Today's High</div>
            <div>{[435648732].toLocaleString("en-US")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
