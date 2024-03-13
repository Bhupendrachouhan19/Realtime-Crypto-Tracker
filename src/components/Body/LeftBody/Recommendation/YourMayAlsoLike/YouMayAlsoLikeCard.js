import React from "react";

const YouMayAlsoLikeCard = ({ coinData }) => {
  const { name, symbol, small, data } = coinData.item;
  const { price, sparkline, price_change_percentage_24h } = data;

  const { usd } = price_change_percentage_24h;
  const usdPercent = usd.toFixed(2).toString();

  return (
    <div className="flex flex-col gap-3 p-4 border-gray-300 border-2 rounded-xl min-w-72">
      <div className="flex items-center grow gap-3 border">
        <div className="rounded-full w-9 h-9 overflow-hidden">
          <img crossOrigin="anonymous" src={small} alt={name} />
        </div>
        <div>{symbol}</div>
        <div
          className={`${usdPercent[0] === "-" ? `bg-red-400` : `bg-green-400`} font-bold px-[0.12rem] rounded-lg text-sm`}
        >
          {usdPercent}%
        </div>
      </div>
      <div className="pl-5">{price}</div>
      <div className="flex">
        <img
          crossOrigin="anonymous"
          src={sparkline}
          className=" w-72 p-4 border"
          alt={name}
        />
      </div>
    </div>
  );
};

export default YouMayAlsoLikeCard;
