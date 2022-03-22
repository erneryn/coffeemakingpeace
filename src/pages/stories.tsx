import Link from 'next/link';
import React from 'react';

import StoriesCard from '@/components/cards/StoriesCard';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import datas from '../data/dummy-articles.json';
import Dates from '../lib/date';

const data = datas.articles;

export default function Stories() {
  return (
    <Layout>
      <Seo />
      <main>
        <div className='mt-10 mb-20 flex w-full flex-row flex-wrap justify-around'>
          {data &&
            data.map((item) => (
              <Link
                key={item.id}
                href={{
                  pathname: '/stories/[detailStories]',
                  query: { detailStories: item.id }
                }}
                passHref
              >
                <div className='mt-10 w-2/5 hover:border-b-zinc-500'>
                  <StoriesCard
                    title={item.title}
                    time={Dates({
                      cerated_date: item.created_date,
                      location: item.location
                    })}
                    img={item.feature_image}
                  />
                </div>
              </Link>
            ))}
        </div>
      </main>
    </Layout>
  );
}
