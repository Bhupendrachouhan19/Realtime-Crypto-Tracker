import React from 'react'
import Performance from './Performance/Performance';
import Fundamentals from './Fundamentals/Fundamentals';
import coinsMarkets from '../../../../utils/assets/constants/coinsMarkets.json';

const Overview = () => {
  const { low_24h, high_24h, atl, ath } = coinsMarkets[0];

  return (
    <div className="flex flex-col gap-5 border-4 rounded-xl bg-white max-w-[93vw] grow pb-10">
      <Performance todaysLow={low_24h} todaysHigh={high_24h} atl={atl} ath={ath} />
      {/* <Fundamentals /> */}
    </div>
  );
}

export default Overview;