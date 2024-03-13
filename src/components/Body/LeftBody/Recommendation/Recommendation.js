import React from 'react'
import YouMayAlsoLike from "./YourMayAlsoLike/YouMayAlsoLike";


const Recommendation = () => {
 
  return (
    <div className="flex flex-col gap-5 border-4 rounded-xl overflow-hidden border-red-500 bg-white max-w-[93vw] md:min-w-[93vw] md:w-4/5">
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