import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type FolksCardProps = {
  id: number;
  name?: string;
  job: string;
  img: string;
};

const FolksCard = ({ id, name, job, img }: FolksCardProps) => {
  return (
    <Link href={`/folks/${id}`} passHref>
      <div className='justify-cente flex h-fit w-fit flex-col items-center'>
        <Image
          className='rounded-full bg-none'
          src={img}
          height='120px'
          width='120px'
          alt='profile'
        />
        <div className='mt-1 mb-4'>
          <h4 className='text-center text-sm'>{name}</h4>
          <p className='text-center text-xs font-bold tracking-wide text-zinc-400'>
            {job}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FolksCard;
