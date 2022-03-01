import Image from 'next/image';
import * as React from 'react';

type ShopCardProps = {
  name?: string;
  price: string;
  img: string;
};

const ShopCard = ({ name, price, img }: ShopCardProps) => {
  return (
    <div className='mr-1 flex h-fit w-fit justify-center bg-none'>
      <Image
        className='relative'
        src={img}
        height='416.93px'
        width='559px'
        alt='product'
      />
      <div className='absolute -bottom-3  mt-1 mb-4 flex w-10/12 justify-between'>
        <p className='text-center  text-xs font-bold'>{name}</p>
        <p className='text-center text-xs font-bold tracking-wide '>{price}</p>
      </div>
    </div>
  );
};

export default ShopCard;
