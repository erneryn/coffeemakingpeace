import Image from 'next/image';
import * as React from 'react';

// import { useRouter } from 'next/router';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import data from '../../../data/dummy-articles.json';

const DetailStories = () => {
  // const router = useRouter();
  // const { id, detailStories } = router.query;

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

  return (
    <div>
      <Layout>
        <Seo />
        <div className='mb-48 mt-10 ml-4'>
          <div className='mt-1 mb-4'>
            <h1>{detail[0].title}</h1>
            <h3 className='tracking-wide'>{date}</h3>
          </div>
          <div className='mb-10 mt-10'>
            <Image
              src={detail[0].feature_image}
              height={400}
              width={650}
              // objectFit='contain'
              alt='placeholder'
            />
          </div>
          <p>{detail[0].long_desc}</p>
        </div>
      </Layout>
    </div>
  );
};

export default DetailStories;
