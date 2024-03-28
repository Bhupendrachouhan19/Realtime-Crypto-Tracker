import React from 'react'
import YouMayAlsoLike from "./YourMayAlsoLike/YouMayAlsoLike";


const Recommendation = () => {
 
  return (
    <div className="flex flex-col gap-5 border-4 rounded-xl overflow-hidden bg-white max-w-[93vw]">
      <div>
        <YouMayAlsoLike heading="You May Also Like" />
      </div>
      <div>
        <YouMayAlsoLike heading="Trending Coins" />
      </div>
    </div>
  );
}

export default Recommendation