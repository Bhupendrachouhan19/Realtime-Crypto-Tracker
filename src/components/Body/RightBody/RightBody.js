import React from "react";
import GetStartedCard from "./GetStartedCard/GetStartedCard";
import TrendingCoins from "./TrendingCoins/TrendingCoins";

const RightBody = () => {
  return (
    <div className="md:flex lg:inline-block items-center md:items-center md:mx-auto md:mt-9 justify-center w-full md:w-fit md:gap-x-10 md:absolute lg:right-28 lg:left-auto md:right-0 md:left-0">
      <div className="flex mx-auto lg:justify-normal my-3 lg:mb-5 lg:w-[20vw] lg:h-[40vh] md:w-[40vw] md:h-[25vh] w-96 h-96 lg:my-5">
        <GetStartedCard />
      </div>

      <div className="flex mx-auto md:justify-normal my-3 lg:w-[20vw] lg:h-[34vh] md:w-[40vw] md:h-[25vh] lg:w-[20vw] lg:h-[35vh] w-96 h-96">
        <TrendingCoins />
      </div>
    </div>
  );
};

export default RightBody;
