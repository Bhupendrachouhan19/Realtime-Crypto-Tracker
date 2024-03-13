import React from 'react'
import YouMayAlsoLikeCard from './YouMayAlsoLikeCard'
import searchTrending from "../../../../../utils/assets/constants/searchTrending.json";
import Carousel from './Carousel';

const YouMayAlsoLike = () => {
  const coins = searchTrending?.coins;
  const box = document.querySelector(".carousel-container");

  const handlePrevBtn = () => {
    const screenWidth = document.querySelector(".carousel-container").offsetWidth;
    document.querySelector(".carousel-container").scrollLeft = document.querySelector(".carousel-container").scrollLeft - screenWidth;
    console.log(screenWidth);
  }
  
  const handleNextBtn = () => {
    const screenWidth = document.querySelector(".carousel-container").offsetWidth;;
    document.querySelector(".carousel-container").scrollLeft = document.querySelector(".carousel-container").scrollLeft + screenWidth;
    console.log(screenWidth);
  }
  
  return (
    <div className=" border-3 border-green-300 px-2">
      <div className="font-bold">You May Also Like</div>
      <div className="overflow-x-auto relative mr-auto">
        <Carousel className="carousel-container">
          {coins.map((coin) => (
            <YouMayAlsoLikeCard key={coin.item.coin_id} coinData={coin} />
          ))}
        </Carousel>
        <div className="flex items-center justify-between absolute inset-0">
          <button
            className="flex top-0 left-0 text-5xl bg-white rounded-full items-center h-fit text-gray-200 hover:text-gray-400 cursor-pointer shadow drop-shadow-xl"
            onClick={handlePrevBtn}
          >
            <ion-icon name="chevron-back-circle-outline"></ion-icon>
          </button>
          <button className="flex text-5xl bg-white rounded-full items-center h-fit text-gray-200 hover:text-gray-400 cursor-pointer shadow drop-shadow-xl">
            <ion-icon
              name="chevron-forward-circle-outline"
              onClick={handleNextBtn}
            ></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
}

export default YouMayAlsoLike