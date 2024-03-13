import React from 'react'

const Carousel = ({children: slides, className}) => {
  return (
    <ul className='flex justify-center snap-x snap-mandatory scroll-p-24'>
      <li className={`${className} flex justify-between gap-6 overflow-x-auto scroll-smooth snap-center`}>{slides}</li>
    </ul>
  );
}

export default Carousel