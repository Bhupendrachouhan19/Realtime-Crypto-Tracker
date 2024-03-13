import React from "react";
import CoinGraph from "./CoinGraph/TradingViewWidget";
import Overview from "./Overview/Overview";
import Sentiment from "./Sentiment/Sentiment";
import AboutCoin from "./AboutCoin/AboutCoin";
import Team from "./Team/Team";
import Recommendation from "./Recommendation/Recommendation";
import Tokenomics from "./Tokenomics/Tokenomics";

const LeftBody = () => {
  return (
    <div className="flex-col md:w-full gap-2">
      <div className="flex-col gap-2">
        <div className="flex  mb-3 md:h-[95vh] lg:w-[75vw] md:items-center md:pb-[4rem]">
          <CoinGraph />
        </div>
      </div>

      <div className="flex justify-center my-3 md:h-[100vh] md:items-end md:pb-[4rem]">
        <Overview />
      </div>

      <div className="flex justify-center my-3 md:h-[100vh] md:items-end md:pb-[4rem]">
        <Sentiment />
      </div>

      <div className="flex justify-center my-3 md:h-[100vh] md:items-end md:pb-[4rem]">
        <AboutCoin />
      </div>

      <div className="flex justify-center my-3 md:h-[100vh] md:items-end md:pb-[4rem]">
        <Tokenomics />
      </div>

      <div className="flex justify-center my-3 md:h-[100vh] md:items-end md:pb-[4rem]">
        <Team />
      </div>

      <div className="flex justify-center my-3 md:items-end md:pb-[4rem]">
        <Recommendation />
      </div>
    </div>
  );
};

export default LeftBody;
