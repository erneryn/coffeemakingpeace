import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import data from '../../../data/dummy-articles.json';

const DetailStories = () => {
  const router = useRouter();
  const { detailStories } = router.query;

  const detail = data.articles;
  const time = new Date(data.articles[0].created_date);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const date =
    detail[0].location.substring(detail[0].location.indexOf(' ') + 1) +
    ', ' +
    months[time.getMonth()] +
    ', ' +
    time.getFullYear();
  // console.log(date);
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
  const [story, setStory] = useState<Story | undefined>(undefined);

  useEffect(() => {
    const detailStory = data.articles.find(
      (e) => e.id.toString() === detailStories
    );
    setStory(detailStory);
  }, [detailStories]);

  return (
    <div>
      <Layout>
        <Seo />
        {story && (
          <div className='mb-48 mt-10 ml-4'>
            <div className='mt-1 mb-4'>
              <h1>{story.title}</h1>
              <h3 className='tracking-wide'>{date}</h3>
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
            <p>{story.long_desc}</p>
          </div>
        )}
      </Layout>
    </div>
  );
};

export default DetailStories;
