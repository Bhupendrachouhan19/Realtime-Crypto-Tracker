import React from "react";
import GetStartedCard from "./GetStartedCard/GetStartedCard";
import TrendingCoins from "./TrendingCoins/TrendingCoins";

const RightBody = () => {
  return (
    <div className="md:flex lg:flex-col items-center md:items-center md:mx-auto justify-center w-full md:w-fit md:gap-x-10 md:absolute lg:right-[2rem] lg:left-auto lg:top-10  md:right-0 md:left-0">
      <div className="flex mx-auto lg:justify-normal my-3 lg:mb-5 lg:w-[26vw] lg:h-min-[41vh] w-[23rem] h-96 md:h-[24rem] md:w-[45vw] lg:my-5">
        <GetStartedCard />
      </div>

      <div className="flex mx-auto lg:justify-normal my-3 lg:mb-5 lg:w-[26vw] w-[23rem] h-auto md:w-[45vw] lg:my-5">
        <TrendingCoins />
      </div>
    </div>
  );
};

export default RightBody;
