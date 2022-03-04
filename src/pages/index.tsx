import Link from 'next/link';
import * as React from 'react';

import FolksCard from '@/components/cards/FolksCard';
import ShopCard from '@/components/cards/ShopCard';
import StoriesCard from '@/components/cards/StoriesCard';
import Layout from '@/components/layout/Layout';
import NextCarousel from '@/components/NextCarousel';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import Dates from './date';
import articles from '../data/dummy-articles.json';
import people from '../data/dummy-people.json';
import items from '../data/dummy-product.json';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

// export const getStaticProps = async () => {
//   const data = articles.articles;

//   return {
//     props: { article: data }
//   };
// };

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        {/* JUMBOTRON */}
        <section id='' className='bg-white'>
          {/* <div
            className='min-h-screen bg-contain bg-center bg-no-repeat'
            style={{ backgroundImage: `url('images/jumbotron.png')` }}
          ></div> */}
          <div className='flex min-h-screen w-full items-center justify-center'>
            <NextImage
              src='/images/jumbotron.png'
              height={200}
              width={600}
              alt='jumbotron images'
            />
          </div>
        </section>
        {/* END OF JUMBOTRON */}
        <section>
          <div className='min-h-screen w-full flex-col justify-between'>
            <div className='flex w-full items-center justify-center'>
              <hr className='h-0.5 w-full bg-black' />
              <h1 className='mx-10 font-black'>STORIES</h1>
              <hr className='h-0.5 w-full bg-black' />
            </div>
            <div className=' mx-2 mt-6 mb-6 flex justify-around'>
              {articles &&
                articles.articles.slice(0, 2).map((item) => (
                  <Link href={'/stories/' + item.id} passHref key={item.id}>
                    <div className='mt-10 w-2/5'>
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
            <div className='flex w-full items-center justify-center'>
              <hr className='h-0.5 w-full border-none bg-white' />
              <button className='mx-10 min-w-fit border-black text-lg font-bold hover:border-b-2'>
                <Link href='/stories'>MORE STORIES</Link>
              </button>
              <hr className='h-0.5 w-full bg-black' />
            </div>
          </div>
        </section>
        <section>
          <div className='h-full w-full'>
            <div className='ml-4 flex items-center'>
              <h1 className='mr-10 font-black'>FOLKS</h1>
              <hr className='h-0.5 w-full bg-black' />
            </div>
            <div className='flex h-1/2 flex-col justify-between'>
              <div className='mt-20 mb-9 ml-16'>
                <NextCarousel>
                  {people &&
                    people.people.map((item) => (
                      <FolksCard
                        key={item.id}
                        img={item.image}
                        name={item.name}
                        job={item.occupation}
                      />
                    ))}
                </NextCarousel>
              </div>
              <div className='flex w-full items-center justify-center'>
                <hr className='h-0.5 w-full border-none bg-white' />
                <button className='mx-8 min-w-fit border-black text-lg font-bold hover:border-b-2'>
                  SEE ALL
                </button>
                <hr className='h-0.5 w-full bg-black' />
              </div>
            </div>
            <div className='mb-9 flex h-1/2 w-full flex-col'>
              <div className='mt-20 mb-9 ml-16'>
                <NextCarousel>
                  {items &&
                    items.product.map((item) => (
                      <ShopCard
                        key={item.id}
                        img={item.image}
                        name={item.name}
                        price={item.price}
                      />
                    ))}
                </NextCarousel>
              </div>
              <div className='flex w-full items-center justify-center'>
                <hr className='h-0.5 w-full border-none bg-white' />
                <button className='mx-8 min-w-fit border-black text-lg font-bold hover:border-b-2'>
                  MORE PRODUCT
                </button>
                <hr className='h-0.5 w-full bg-black' />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
