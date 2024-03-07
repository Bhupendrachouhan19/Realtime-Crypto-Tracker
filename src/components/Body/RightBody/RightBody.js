import React from "react";
import GetStartedCard from "./GetStartedCard/GetStartedCard";
import TrendingCoins from "./TrendingCoins/TrendingCoins";

const RightBody = () => {
  return (
    <div className=" md:flex lg:flex-col items-center md:items-center md:mx-auto justify-center w-full md:w-fit md:gap-4">
      <div className="flex mx-auto lg:justify-normal my-3 lg:mb-5 lg:w-[20vw] lg:h-[40vh] md:w-[40vw] md:h-[25vh] w-96 h-96 lg:my-5">
        <GetStartedCard />
      </div>

      <div className="flex mx-auto md:justify-normal my-3 lg:w-[20vw] lg:h-[34vh] md:w-[40vw] md:h-[25vh] w-96 h-96">
        <TrendingCoins />
      </div>
    </div>
  );
};

export default RightBody;
