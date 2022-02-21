import * as React from 'react';

import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
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
          <div className='flex min-h-screen w-screen items-center justify-center'>
            <NextImage
              src='images/jumbotron.png'
              height={900}
              width={1000}
              alt='jumbotron images'
            />
          </div>
        </section>
        {/* END OF JUMBOTRON */}
      </main>
    </Layout>
  );
}
