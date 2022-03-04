import parse from 'html-react-parser';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Dates from '../date';
import data from '../../data/dummy-articles.json';

// import { Item } from 'semantic-ui-react';

interface Story {
  id: number;
  apps_name: string;
  title: string;
  short_desc: string;
  long_desc: string;
  author: string;
  created_date: string;
  location: string;
  feature_image: string;
}

const DetailStories = () => {
  const router = useRouter();
  const { detailStories } = router.query;
  const [story, setStory] = useState<Story | undefined>(undefined);

  useEffect(() => {
    const getDetailData = () => {
      const filteredStories = data.articles.find(
        (item) => item.id.toString() === detailStories
      );
      setStory(filteredStories);
    };
    getDetailData();
  }, [detailStories]);

  return (
    <div>
      <Layout>
        <Seo />
        <div className='flex items-center justify-center'>
          {story && (
            <div className='mb-32 mt-10 w-3/4'>
              <div className='mt-1 mb-4'>
                <h1>{story.title}</h1>
                <h3 className='tracking-wide'>
                  {Dates({
                    cerated_date: story.created_date,
                    location: story.location
                  })}
                </h3>
              </div>
              <div className='mb-10 mt-10'>
                <Image
                  src={story.feature_image}
                  height={400}
                  width={650}
                  // objectFit='contain'
                  alt='placeholder'
                />
              </div>
              <div className='story'>{parse(story.long_desc)}</div>
            </div>
          )}
        </div>
        <div className='w-100 flex items-center pb-48'>
          <hr className='h-0.5 w-1/6 border-none bg-black' />
          <button className='mx-8 min-w-fit text-3xl font-bold'>
            <Link href='/'>BACK</Link>
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default DetailStories;
