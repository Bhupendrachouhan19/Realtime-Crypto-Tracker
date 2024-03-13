import React from 'react'
import YouMayAlsoLikeCard from './YouMayAlsoLikeCard'
import searchTrending from "../../../../../utils/assets/constants/searchTrending.json";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css"

const YouMayAlsoLike = ({heading}) => {
  const coins = searchTrending?.coins;
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <div className='flex absolute right-0 bg-white border rounded-full text-4xl shadow-lg'>
        <ion-icon
          name="chevron-forward-outline"
          onClick={() => onClick()}
        ></ion-icon>
      </div>
    );
  };

  const CustomLeftArrow = ({ onClick }) => {
    return (
      <div className="flex absolute left-0 bg-white border rounded-full text-4xl shadow-lg">
        <ion-icon
          name="chevron-back-outline"
          onClick={() => onClick()}
        ></ion-icon>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-9 my-6">
      <div className="text-3xl font-bold mx-6">{heading}</div>
      <div>
        <Carousel
          responsive={responsive}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          rewind={true}
          rewindWithAnimation={true}
          autoPlay={true}
          autoPlaySpeed={2000}
        >
          {coins.map((coin) => (
            <YouMayAlsoLikeCard key={coin.item.coin_id} coinData={coin} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default YouMayAlsoLike