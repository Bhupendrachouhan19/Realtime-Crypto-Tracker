import React from 'react'
import Performance from './Performance/Performance';
import Fundamentals from './Fundamentals/Fundamentals';

const Overview = () => {
  return (
    <div className="flex flex-col gap-5 border-4 rounded-xl border-red-500 bg-white max-w-[93vw] grow">
      <Performance />
      <Fundamentals />
    </div>
  );
}

export default Overview;