import React from "react";
import GetStartedCard from "./GetStartedCard/GetStartedCard";
import TrendingCoins from "./TrendingCoins/TrendingCoins";

const RightBody = () => {
  return (
    <div className="md:flex lg:inline-block items-center md:items-center md:mx-auto justify-center w-full md:w-fit md:gap-x-10 md:absolute lg:right-[2rem] lg:left-auto md:right-0 md:left-0">
      <div className="flex mx-auto lg:justify-normal my-3 lg:mb-5 lg:w-[26vw] lg:h-[41vh] w-[23rem] h-96 md:h-[24rem] md:w-[45vw] lg:my-5">
        <GetStartedCard />
      </div>

      <div className="flex mx-auto lg:justify-normal my-3 lg:mb-5 lg:w-[26vw] lg:h-[41vh] w-[23rem] h-96 md:h-[24rem] md:w-[45vw] lg:my-5">
        <TrendingCoins />
      </div>
    </div>
  );
};

export default RightBody;
