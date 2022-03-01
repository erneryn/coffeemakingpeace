import * as React from 'react';

import StoriesCard from '@/components/cards/StoriesCard';
// import { useRouter } from 'next/router';
// import UnstyledLink from '@/components/links/UnstyledLink';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import data from '../data/dummy-articles.json';

export default function Stories() {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <Layout>
      <Seo />
      <main>
        <div className='mt-10 mb-20 flex w-full flex-row flex-wrap justify-around'>
          {data &&
            data.articles.map((item) => (
              // <UnstyledLink
              //   href='/post/[id]/[comment]'
              //   as={`/post/${id}/first-comment`}
              //   className='mt-10 w-2/5 hover:border-b-zinc-500'
              // >
              //   <StoriesCard
              //     key={item.id}
              //     title={item.title}
              //     time={item.created_date}
              //     img={item.feature_image}
              //   />
              // </UnstyledLink>
              <div
                className='mt-10 w-2/5 hover:border-b-zinc-500'
                key={item.id}
              >
                <StoriesCard
                  title={item.title}
                  time={item.created_date}
                  img={item.feature_image}
                />
              </div>
            ))}
        </div>
      </main>
    </Layout>
  );
}
