import React from 'react'
import getStarted from "../../../../utils/assets/images/getStarted.png"

const GetStartedCard = () => {
  return (
    <div className="flex justify-center items-center border-4 bg-[#244b9f] hover:bg-[#26249f] transition-all ease-in duration-700 rounded-3xl border-red-500 w-full">
      <div className="flex-col text-center justify-between w-[85%] h-[85%] rounded-3xl">
        <div className='flex-col h-[85%]'>
          <span className="block text-white font-semibold mb-2 text-2xl md:text-[1.3rem] lg:text-2xl lg:leading-5">
            Get Started with KoinX
          </span>
          <span className="block text-white font-semibold mb-2 text-2xl md:text-[1.3rem] lg:text-2xl lg:leading-5">
            for FREE
          </span>
          <p className="text-white md:text-[0.8 rem] lg:text-[0.9rem]">
            with our range of features that you can equip for free, KoinX allows
            you to be more educational and aware of your tax reports.
          </p>
          <div className="flex justify-center items-center">
            <img src={getStarted} alt="Get Started" className="h-24 mt-3 lg:h-max-[7rem] lg:h-[7rem] lg:mt-1" />
          </div>
        </div>

        <div>
          <button className="bg-white w-fit md:min-w-fit text-black font-bold px-8 py-2 rounded-md hover:bg-[#ffc042] hover:cursor-pointer hover:px-7 duration-200 transition-all ease-in">
            Get Started For Free &nbsp;
            <span className="inline-flex align-middle ">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetStartedCard