import Image from 'next/image';
import React from 'react';

type FolksCardProps = {
  name?: string;
  job: string;
  img: string;
};

const FolksCard = ({ name, job, img }: FolksCardProps) => {
  return (
    <div className='flex h-fit w-fit justify-center bg-none'>
      <div className='w-fit rounded-lg'>
        <Image
          className='rounded-full bg-none'
          src={img}
          height='200px'
          width='200px'
          alt='profile'
        />

        <div className='mt-1 mb-4'>
          <h4 className='text-center'>{name}</h4>
          <p className='text-center text-xs font-bold tracking-wide text-zinc-400'>
            {job}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FolksCard;
