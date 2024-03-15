import React from "react";
import Colormap from "./Colormap";

const Performance = ({todaysLow, todaysHigh, atl, ath}) => {


  return (
    <div>
      <div className="my-6 ml-3 text-3xl font-bold">Performance</div>
      <div className="flex flex-col gap-9">
        
        <div className="flex justify-around text-center items-center w-full">
          <div className="flex flex-col mx-1 gap-2 grow">
            <div className="text-lg md:text-2xl text-gray-600">Today's Low</div>
            <div className="text-xl md:font-semibold md:text-3xl">
              {todaysLow.toLocaleString("en-US")}
            </div>
          </div>

          <Colormap low={todaysLow} high={todaysHigh} />

          <div className="flex flex-col gap-2 grow">
            <div className="text-lg md:text-2xl text-gray-600">Today's High</div>
            <div className="text-xl md: font-semibold md:text-3xl">
              {todaysHigh.toLocaleString("en-US")}
            </div>
          </div>
        </div>

        <div className="flex justify-around text-center items-center w-full">
          <div className="flex flex-col mx-1 gap-2 grow">
            <div className="text-lg md:text-2xl text-gray-600">52W Low</div>
            <div className="text-xl md:font-semibold md:text-3xl">
              {atl.toLocaleString("en-US")}
            </div>
          </div>

          <Colormap low={atl} high={ath} />

          <div className="flex flex-col gap-2 grow">
            <div className="text-lg md:text-2xl text-gray-600">52W High</div>
            <div className="text-xl md:font-semibold md:text-3xl">
              {ath.toLocaleString("en-US")}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Performance;
