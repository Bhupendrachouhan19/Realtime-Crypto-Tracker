import React from "react";
import CoinGraph from "./CoinGraph/CoinGraph";
import Overview from "./Overview/Overview";
import Sentiment from "./Sentiment/Sentiment";
import AboutCoin from "./AboutCoin/AboutCoin";
import Team from "./Team/Team";
import Recommendation from "./Recommendation/Recommendation";
import Tokenomics from "./Tokenomics/Tokenomics";
import RightBody from "../RightBody/RightBody";

const LeftBody = () => {
  return (
    <div className="flex-col  md:w-full gap-2">
      <div className="flex-col gap-2">
        <div className="flex justify-start mb-3 md:h-[95vh] lg:w-[75vw] md:items-center md:pb-[4rem] bg-blue-300">
          <CoinGraph />
        </div>
      </div>

      <div className="flex-col  md:w-full gap-2"></div>
      <div className="flex justify-center my-3 md:h-[100vh] md:items-end md:pb-[4rem] bg-blue-300">
        <Overview />
      </div>

      <div className="flex justify-center my-3 md:h-[100vh] md:items-end md:pb-[4rem] bg-blue-300">
        <Sentiment />
      </div>

      <div className="flex justify-center my-3 md:h-[100vh] md:items-end md:pb-[4rem] bg-blue-300">
        <AboutCoin />
      </div>

      <div className="flex justify-center my-3 md:h-[100vh] md:items-end md:pb-[4rem] bg-blue-300">
        <Team />
      </div>

      <div className="flex justify-center my-3 md:h-[100vh] md:items-end md:pb-[4rem] bg-blue-300">
        <Tokenomics />
      </div>

      <div className="flex justify-center my-3 md:h-[100vh] md:items-end md:pb-[4rem] bg-blue-300">
        <Recommendation />
      </div>
    </div>
  );
};

export default LeftBody;
