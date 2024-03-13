import React from "react";

const YouMayAlsoLikeCard = ({ coinData }) => {
  const { name, symbol, small, data } = coinData.item;
  const { price, sparkline, price_change_percentage_24h } = data;

  const { usd } = price_change_percentage_24h;
  const usdPercent = usd.toFixed(2).toString();

  return (
    <div className="flex flex-col mx-4 p-3 border-gray-300 border-2 rounded-xl min-w-72">
      <div className="flex items-center grow gap-3">
        <div className="rounded-full w-9 h-9 overflow-hidden">
          <img crossOrigin="anonymous" src={small} alt={name} />
        </div>
        <div className="text-2xl">{symbol}</div>
        <div
          className={`${usdPercent[0] === "-" ? `bg-red-200` : `bg-green-200`} rounded-[0.2rem] text-lg px-2`}
        >
          {usdPercent}%
        </div>
      </div>
      <div className="pl-5 font-semibold text-4xl">{price}</div>
      <div className="flex mx-auto">
        <img
          crossOrigin="anonymous"
          src={sparkline}
          className=" w-72 p-4"
          alt={name}
        />
      </div>
    </div>
  );
};

export default YouMayAlsoLikeCard;
