import React from 'react'
import YouMayAlsoLike from "./YourMayAlsoLike/YouMayAlsoLike";


const Recommendation = () => {
 
  return (
    <div className="flex flex-col gap-3 border-4 rounded-xl overflow-hidden border-red-500 bg-white max-w-[93vw] md:min-w-[93vw] md:w-4/5">
      <div>
        <YouMayAlsoLike />
      </div>
    </div>
  );
}

export default Recommendation