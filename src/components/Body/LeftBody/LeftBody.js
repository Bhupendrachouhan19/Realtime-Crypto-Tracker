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
    <div className="flex-col md:items-start md:w-full gap-2">
      <div className="lg:flex lg:items-center lg:mt-10">
        <div className="flex lg:w-3/4 items-center justify md:w-[85vw] md:mx-auto md:h-[60vh]">
          <CoinGraph />
        </div>
        <RightBody />
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
        <Team />
      </div>

      <div className="flex justify-center my-3 md:h-[100vh] md:items-end md:pb-[4rem]">
        <Tokenomics />
      </div>

      <div className="flex justify-center my-3 md:h-[100vh] md:items-end md:pb-[4rem]">
        <Recommendation />
      </div>
    </div>
  );
};

export default LeftBody;
