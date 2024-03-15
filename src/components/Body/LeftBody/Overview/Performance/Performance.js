import React from "react";
import Colormap from "./Colormap";

const Performance = () => {


  return (
    <div>
      <div className="my-6 ml-3 text-3xl font-bold">Performance</div>
      <div className="flex flex-col gap-9">
        <div className="flex border justify-around text-center items-center w-full">
          <div className="flex flex-col gap-2 grow">
            <div className="text-lg text-gray-600">Today's Low</div>
            <div className="text-xl">{[164356487].toLocaleString("en-US")}</div>
          </div>

          <Colormap />

          <div className="flex flex-col gap-2 grow">
            <div className="text-lg text-gray-600">Today's High</div>
            <div className="text-xl">{[435648732].toLocaleString("en-US")}</div>
          </div>
        </div>
        <div className="flex border justify-around text-center items-center w-full">
          <div className="flex flex-col gap-2 grow">
            <div className="text-lg text-gray-600">52W Low</div>
            <div className="text-xl">{[164356487].toLocaleString("en-US")}</div>
          </div>

          <Colormap />

          <div className="flex flex-col gap-2 grow">
            <div className="text-lg text-gray-600">52W High</div>
            <div className="text-xl">{[435648732].toLocaleString("en-US")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
