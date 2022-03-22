import Image from 'next/image';
import React from 'react';

type StoriesCardProps = {
  title?: string;
  time?: string;
  img: string;
};

const StoriesCard = ({ title, time, img }: StoriesCardProps) => {
  return (
    <div className='flex h-fit w-full justify-center'>
      <div className='w-fit rounded-lg bg-white'>
        <div className='mt-1 mb-4'>
          <h2>{title}</h2>
          <p className='text-sm font-bold tracking-wide sm:text-xs'>{time}</p>
        </div>
        <a href='#!'>
          <Image
            src={img}
            height={437}
            width={697}
            // objectFit='contain'
            alt='placeholder'
          />
        </a>
      </div>
    </div>
  );
};

export default StoriesCard;
